/**
 * Bind event when mounted or activated
 */
import {on, off} from '../dom/event';


// type BindEventMixinThis = {
//     binded: boolean;
// };
//
// type BindEventHandler = (bind: Function, isBind: boolean) => void;

export function BindEventMixin(handler) {
    function bind() {
        console.log("this is the binding mixins")
       // console.log(this)
        if (!this.binded) {
            handler.call(this, on, true);
            this.binded = true;
        }
    }

    function unbind() {
        console.log("this is the unbinding mixins")
       // console.log(this)
        if (this.binded) {
            handler.call(this, off, false);
            this.binded = false;
        }
    }

    return {
        mounted: bind,
        activated: bind,
        deactivated: unbind,
        beforeDestroy: unbind
    };
}
