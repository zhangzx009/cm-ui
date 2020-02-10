import {createNamespace, isDef} from '@cm-ui/cm-utils/src';
import {inherit} from '@cm-ui/cm-utils/src/functional';
import {preventDefault} from '@cm-ui/cm-utils/src/dom/event';
import './index.less';


const [createComponent, bem] = createNamespace('overlay');



function preventTouchMove(event) {
    preventDefault(event, true);
}

function Overlay(h, props, slots, ctx) {
    const style = {
        zIndex: props.zIndex,
        ...props.customStyle
    };

    if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
    }
    return (
        <transition name="cm-fade">
            <div
                vShow={props.show}
                style={style}
                class={[bem(), props.className]}
                onTouchmove={preventTouchMove}
                onClick={stopPropagation}
                {...inherit(ctx, true)}
            >
                {slots.default && slots.default()}
            </div>
        </transition>
    );
}

Overlay.props = {
    show: Boolean,
    duration: [Number, String],
    className: null,
    customStyle: Object,
    zIndex: {
        type: [Number, String],
        default: 1
    },
};

export default createComponent(Overlay);
