<script>
    import {inherit} from '@cm-ui/cm-utils/src/functional';
    import {createNamespace, isDef} from '@cm-ui/cm-utils/src';
    // import './index.less'
     const [createComponent, bem] = createNamespace('info');

     function Info (h, props, slots, ctx) {
    // const Info = (h, props, slots, ctx) => {
         const {dot, info} = props;
         const showInfo = isDef(info) && info !== '';

         if (!dot && !showInfo) {
             return;
         }

         return (
             <div class={bem({dot})}
                  {...inherit(ctx, true)}>
                 {dot ? '' : info}
             </div>
         );
     }

     Info.props = {
         dot: Boolean,
         info: [Number, String],
     };

     export default createComponent(Info)

</script>
<style lang="less">
    @import './var';

    .cm-info {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        min-width: @info-size;
        padding: @info-padding;
        color: @info-color;
        font-weight: @info-font-weight;
        font-size: @info-font-size;
        font-family: @info-font-family;
        line-height: @info-size - @info-border-width * 2;
        text-align: center;
        background-color: @info-background-color;
        border: @info-border-width solid @white;
        border-radius: @info-size;
        transform: translate(50%, -50%);
        transform-origin: 100%;

        &--dot {
            width: @info-dot-size;
            min-width: 0;
            height: @info-dot-size;
            background-color: @info-dot-color;
            border-radius: 100%;
        }
    }

</style>
