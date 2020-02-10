import Overlay from '@cm-ui/overlay';
import {context} from './context';
import {mount} from '@cm-ui/cm-utils/src/functional';


const defaultConfig={
    className: '',
    customStyle: {}
};

let overlay;

// close popup when click overlay && closeOnClickOverlay is true
function onClickOverlay() {
    if (context.top) {
        const {vm} = context.top;
        vm.$emit('click-overlay');

        if (vm.closeOnClickOverlay) {
            if (vm.onClickOverlay) {
                vm.onClickOverlay();
            } else {
                vm.close();
            }
        }
    }
}

function mountOverlay() {
    overlay = mount(Overlay, {
        on: {
            click: onClickOverlay
        }
    });
}

export function updateOverlay() {
    //cansole.log("^^^^^^^^^^^^this is the update Overlay")
    if (!overlay) {
       mountOverlay()
    }

    if (context.top) {
        const {vm, config} = context.top;

        const el = vm.$el;
        if (el && el.parentNode) {
            el.parentNode.insertBefore(overlay.$el, el);
        } else {
            document.body.appendChild(overlay.$el);
        }

        Object.assign(overlay, defaultConfig, config, {
            show: true
        });
    } else {
        overlay.show = false;
    }
}

export function openOverlay(vm, config) {
    //cansole.log("@@@@@@@@@@@@ overlay mixins open overlay")

    if (!context.stack.some(item => item.vm === vm)) {
        //cansole.log('$$$$$$$$$$$$ context stack overlay')
        context.stack.push({vm, config});
        updateOverlay();
    }
}

export function closeOverlay(vm) {
    const {stack} = context;

    if (stack.length) {
        if (context.top.vm === vm) {
            stack.pop();
            updateOverlay();
        } else {
            context.stack = stack.filter(item => item.vm !== vm);
        }
    }
}
