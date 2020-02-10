import Info from '../index';
import {mount, shallowMount} from '@vue/test-utils';

// const WrappedCell = {
//     components: {Info},
//     template: `
//         <div>
//             <Info v-bind="$props" v-on="$listeners"/>
//         </div>
//     `
// }

// functional component need to use a HOC wrapper to pass the context
test('should not render when info is empty string', () => {
    const wrapper = mount(Info, {
        propsData: {
            info: ''
        }
    });

    expect(wrapper).toMatchSnapshot();
});

test('should not render when info is empty undefined', () => {
    const wrapper = mount(Info, {
        propsData: {
            info: undefined
        }
    });

    expect(wrapper).toMatchSnapshot();
});

test('should render when info is zero', () => {


    const wrapper = mount(Info, {

        propsData: {

            info: 0

        }
    });

    expect(wrapper).toMatchSnapshot();
});
