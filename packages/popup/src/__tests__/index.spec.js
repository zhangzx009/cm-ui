import Popup from '..';
import {mount} from '@vue/test-utils';


function later(delay = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

function getTouch(el, x, y) {
    return {
        identifier: Date.now(),
        target: el,
        pageX: x,
        pageY: y,
        clientX: x,
        clientY: y,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5
    };
}

function trigger(wrapper, eventName, x = 0, y = 0, options = {}) {
    const el = 'element' in wrapper ? wrapper.element : wrapper;
    const touchList = options.touchList || [getTouch(el, x, y)];

    if (options.x || options.y) {
        touchList.push(getTouch(el, options.x, options.y));
    }

    const event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, {});

    Object.assign(event, {
        clientX: x,
        clientY: y,
        touches: touchList,
        targetTouches: touchList,
        changedTouches: touchList
    });

    el.dispatchEvent(event);
}

// simulate drag gesture
function triggerDrag(el, x = 0, y = 0) {
    trigger(el, 'touchstart', 0, 0);
    trigger(el, 'touchmove', x / 4, y / 4);
    trigger(el, 'touchmove', x / 3, y / 3);
    trigger(el, 'touchmove', x / 2, y / 2);
    trigger(el, 'touchmove', x, y);
    trigger(el, 'touchend', x, y);
}

// popup need to mount a parent node
let wrapper;
afterEach(() => {
    wrapper.destroy();
});

test('lazy render', () => {
    wrapper = mount(Popup);
   //  wrapper = mount({
   //      template:`<popup/>`,
   //      components:{Popup}
   //  })
    expect(wrapper.vm.$el.tagName).toBeFalsy();
    wrapper.vm.value = true; /* test directly muted from the outside*/
    expect(wrapper.vm.$el.tagName).toBeTruthy();

    expect(wrapper).toMatchSnapshot();
});

test('reset z-index', () => {
    wrapper = mount(Popup, {
        propsData: {
            value: true,
            zIndex: 10,
            lockScroll: false
        }
    });

    expect(wrapper).toMatchSnapshot();
});

test('popup lock scroll', () => {
    const wrapper1 = mount(Popup, {
        propsData: {
            value: true
        }
    });
    expect(document.body.classList.contains('cm-overflow-hidden')).toBeTruthy();
    triggerDrag(document, 0, 100);
    triggerDrag(document, 0, -150);

    const wrapper2 = mount(Popup, {
        propsData: {
            value: true
        }
    });
    // expect(wrapper1).toMatchSnapshot()
    wrapper1.vm.$destroy();
    expect(document.body.classList.contains('cm-overflow-hidden')).toBeTruthy();
    // expect(wrapper2).toMatchSnapshot()

    wrapper2.vm.$destroy();
    expect(document.body.classList.contains('cm-overflow-hidden')).toBeFalsy();
});

test('get container with parent', () => {
    // get container if function -> create a node and mounted to the dynamic node
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    //

    // how to register test template on the jest
    wrapper = mount({
        template: `
            <div>
                <popup v-bind:value="true" :get-container="getContainer"/>
            </div>
        `,
        components: {
            Popup
        },
        data() {
            return {
                getContainer: () => div1
            };
        }
    });
    expect(wrapper).toMatchSnapshot()

    // pop can't not be founded
    const popup = wrapper.find('.cm-popup').element;

    expect(popup.parentNode).toEqual(div1);
    wrapper.vm.getContainer = () => div2;
    expect(popup.parentNode).toEqual(div2);
    wrapper.vm.getContainer = null;
    expect(popup.parentNode).toEqual(wrapper.element);
});

test('get container with selector', () => {
    wrapper = mount({
        template: `
            <div>
                <popup class="get-container-selector-1" :value="true" get-container="body"></popup>
                <popup class="get-container-selector-2" :value="true" get-container="unknown"></popup>
            </div>
        `,
        components: {
            Popup
        }
    });

    const dom1 = document.querySelector('.get-container-selector-1');
    const dom2 = wrapper.vm.$el.querySelector('.get-container-selector-2');

    expect(dom1.parentNode).toEqual(document.body);
    expect(dom2.parentNode).toEqual(wrapper.vm.$el);
});

test('render overlay', async () => {
    const div = document.createElement('div');
    wrapper = mount({
        template: `
            <div>
                <popup :value="true" :get-container="getContainer"/>
            </div>
        `,
        components: {
            Popup
        },
        data() {
            return {
                getContainer: () => div
            };
        }
    });

    await later();

    expect(div.querySelector('.cm-overlay')).toBeTruthy();
});

test('watch overlay prop', async () => {
    const div = document.createElement('div');
    wrapper = mount({
        template: `
            <div>
                <popup :value="show" :overlay="overlay" :get-container="getContainer"/>
            </div>
        `,
        components: {
            Popup
        },
        data() {
            return {
                show: false,
                overlay: false,
                getContainer: () => div
            };
        }
    });

    await later();
    expect(div.querySelector('.cm-overlay')).toBeFalsy();

    wrapper.setData({overlay: true});
    await later();
    expect(div.querySelector('.cm-overlay')).toBeFalsy();

    wrapper.setData({show: true});
    await later();
    expect(div.querySelector('.cm-overlay')).toBeTruthy();
});

test('close on click overlay', async () => {
    const div = document.createElement('div');
    const onClickOverlay = jest.fn();

    wrapper = mount({
        template: `
            <div>
                <popup
                        v-model="value"
                        :get-container="getContainer"
                        @click-overlay="onClickOverlay"
                />
            </div>
        `,
        components: {
            Popup
        },
        data() {
            return {
                value: true,
                getContainer: () => div
            };
        },
        methods: {
            onClickOverlay
        }
    });

    await later();

    const modal = div.querySelector('.cm-overlay');
    triggerDrag(modal, 0, -30);
    modal.click();

    expect(wrapper.vm.value).toBeFalsy();
    expect(onClickOverlay).toHaveBeenCalledTimes(1);
});

test('open & close event', () => {
    const wrapper = mount(Popup);
    wrapper.vm.value = true;
    expect(wrapper.emitted('open')).toBeTruthy();
    wrapper.vm.value = false;
    expect(wrapper.emitted('close')).toBeTruthy();
});

test('click event', () => {
    const wrapper = mount(Popup, {
        propsData: {
            value: true
        }
    });

    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
});

test('duration prop', () => {
    const wrapper = mount(Popup, {
        propsData: {
            value: true,
            duration: 0.5
        }
    });

    expect(wrapper).toMatchSnapshot();
});

test('round prop', () => {
    const wrapper = mount(Popup, {
        propsData: {
            value: true,
            round: true
        }
    });

    expect(wrapper).toMatchSnapshot();
});

test('closeable prop', () => {
    const wrapper = mount(Popup, {
        propsData: {
            value: true,
            closeable: true
        }
    });

    wrapper.find('.cm-popup__close-icon').trigger('click');
    expect(wrapper.emitted('input')[0][0]).toEqual(false);
});

test('close-icon prop', () => {
    const wrapper = mount(Popup, {
        propsData: {
            value: true,
            closeable: true,
            closeIcon: 'success'
        }
    });

    expect(wrapper).toMatchSnapshot();
});
