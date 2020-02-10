import {createNamespace} from '@cm-ui/cm-utils/src';
import {inherit} from '@cm-ui/cm-utils/src/functional';
import './index.less'
const [createComponent, bem] = createNamespace('divider');

function Divider(h, props, slots, ctx) {
    return (
        <div
            role="separator"
            style={{borderColor: props.borderColor}}
            class={bem({
                dashed: props.dashed,
                hairline: props.hairline,
                [`content-${props.contentPosition}`]: slots.default
            })}
            {...inherit(ctx, true)}
        >
            {slots.default && slots.default()}
        </div>
    );
}

Divider.props = {
    dashed: Boolean,
    hairline: {
        type: Boolean,
        default: true
    },
    contentPosition: {
        type: String,
        default: 'center'
    }
};

export default createComponent(Divider);
