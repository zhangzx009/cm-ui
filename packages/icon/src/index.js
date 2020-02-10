import { createNamespace, addUnit } from '@cm-ui/cm-utils/src';
import { inherit } from '@cm-ui/cm-utils/src/functional';
import Info from '@cm-ui/info';
import Image from '@cm-ui/image';
import './index.less'

const [createComponent, bem] = createNamespace('icon');

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  const imageIcon = isImage(props.name);

  return (
    <props.tag
      class={[props.classPrefix, imageIcon ? '' : `${props.classPrefix}-${props.name}`]}
      style={{
        color: props.color,
        fontSize: addUnit(props.size)
      }}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
      {imageIcon && (
        <Image class={bem('image')} fit="contain" src={props.name} showLoading={false} />
      )}
      <Info dot={props.dot} info={props.info} />
    </props.tag>
  );
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

export default createComponent(Icon);
