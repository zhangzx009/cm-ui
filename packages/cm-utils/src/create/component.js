/**
 * Create a basic component with common options
 */
import {camelize} from '../format/string';
import {SlotsMixin} from '../mixins/slots';


function install(Vue) {
    const {name} = this;
    Vue.component(name, this);
    Vue.component(camelize(`-${name}`), this);
}

// unify slots & scopedSlots
// unify slots & scopedSlots
export function unifySlots(context) {
    // use data.scopedSlots in lower Vue version
    const scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
    const slots = context.slots();

    Object.keys(slots).forEach(key => {
        if (!scopedSlots[key]) {
            scopedSlots[key] = () => slots[key];
        }
    });

    return scopedSlots;
}

// should be removed after Vue 3
/*
* In cases like this, we can mark components as functional,
* which means that they’re stateless (no reactive data) and instanceless
* (no this context)
* */
function transformFunctionComponent(pure) {
    return {
        functional: true,
        props: pure.props,
        model: pure.model,
        render: (h, context) => pure(h, context.props, unifySlots(context), context)
    };
}

export function createComponent(name) {
    return function (sfc) {

        if (typeof sfc === 'function') {
            sfc = transformFunctionComponent(sfc);
        }

        if (!sfc.functional) {
            sfc.mixins = sfc.mixins || [];
            sfc.mixins.push(SlotsMixin);
        }

        sfc.name = name;
        sfc.install = install;

        return sfc;
    };
}
