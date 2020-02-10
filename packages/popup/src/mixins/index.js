import {context} from './context';
import {openOverlay, closeOverlay, updateOverlay} from './overlay';
import {TouchMixin} from '@cm-ui/cm-utils/src/mixins/touch';
import {PortalMixin} from '@cm-ui/cm-utils/src/mixins/portal';
import {CloseOnPopstateMixin} from '@cm-ui/cm-utils/src/mixins/close-on-popstate';
import {on, off, preventDefault} from '@cm-ui/cm-utils/src/dom/event';
import {getScrollEventTarget} from '@cm-ui/cm-utils/src/dom/scroll';

export const popupMixinProps = {
    // whether to show popup
    // todo reactive property show use computed or data
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
        type: Boolean,
        default: true
    },
    // whether to lazy render
    lazyRender: {
        type: Boolean,
        default: true
    }
};

// popup mixins wrapper
export function PopupMixin(options = {}) {
    return {
        mixins: [
            TouchMixin,
           CloseOnPopstateMixin,
            PortalMixin({
                afterPortal() {
                    if (this.overlay) {
                        updateOverlay();
                    }
                }
            })
        ],

        props: popupMixinProps,

        data() {
            return {
                inited: this.value
                //  overlay: this.hasOverlay
            };
        },

        computed: {

            // todo bug on the should Render
            shouldRender() {
                //cansole.log( "this is the should render triggered from mixins")
                return this.inited || !this.lazyRender;
            }
        },

        watch: {
            value(val) {
                //cansole.log("this is the watch value***************>>")
                const type = (val) ? 'open' : 'close';
                this.inited = this.inited || this.value;
                this[type]();
        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
            },

            overlay: 'renderOverlay'
        },

        mounted() {
            if (this.value) {
                //cansole.log("this is mounted from popup mixins trigger")
                this.open();
            }
        },

        /* istanbul ignore next */
        activated() {
            if (this.shouldReopen) {
                this.$emit('input', true);
                this.shouldReopen = false;
            }
        },

        beforeDestroy() {
            this.close();

            if (this.getContainer && this.$parent && this.$parent.$el) {
                this.$parent.$el.appendChild(this.$el);
            }
        },

        /* istanbul ignore next */
        deactivated() {
            if (this.value) {
                this.close();
                this.shouldReopen = true;
            }
        },

        methods: {
            open() {
                /* istanbul ignore next */
                if (this.$isServer || this.opened) {
                    return;
                }

                // cover default zIndex
                if (this.zIndex !== undefined) {
                    context.zIndex = this.zIndex;
                }

                this.opened = true;
                this.renderOverlay();

                if (this.lockScroll) {
                    on(document, 'touchstart', this.touchStart);
                    on(document, 'touchmove', this.onTouchMove);

                    if (!context.lockCount) {
                        document.body.classList.add('cm-overflow-hidden');
                    }
                    context.lockCount++;
                }
            },

            close() {
                if (!this.opened) {
                    return;
                }

                if (this.lockScroll) {
                    context.lockCount--;
                    off(document, 'touchstart', this.touchStart);
                    off(document, 'touchmove', this.onTouchMove);

                    if (!context.lockCount) {
                        document.body.classList.remove('cm-overflow-hidden');
                    }
                }

                this.opened = false;
                closeOverlay(this);
                this.$emit('input', false);
            },

            onTouchMove(event) {
                //cansole.log("this is the on touch move")
                this.touchMove(event);
                const direction = this.deltaY > 0 ? '10' : '01';
                const el = getScrollEventTarget(event.target, this.$el);
                const {scrollHeight, offsetHeight, scrollTop} = el;
                let status = '11';

                /* istanbul ignore next */
                if (scrollTop === 0) {
                    status = offsetHeight >= scrollHeight ? '00' : '01';
                } else if (scrollTop + offsetHeight >= scrollHeight) {
                    status = '10';
                }

                /* istanbul ignore next */
                if (
                    status !== '11' &&
                    this.direction === 'vertical' &&
                    !(parseInt(status, 2) & parseInt(direction, 2))
                ) {
                    preventDefault(event, true);
                }
            },

            renderOverlay() {
                if (this.$isServer || !this.value) {
                    return;
                }
                //cansole.log(`################# this is the renderOverlay`)
                //console.log(this.overlay)
                this.$nextTick(() => {
                    this.updateZIndex(this.overlay ? 1 : 0);
                    //cansole.log( 'this is the mixins render overlay'+this.overlay)
                    if (this.overlay) {
                        //cansole.log("if the overlay is open-->")
                        openOverlay(this, {
                            zIndex: context.zIndex++,
                            duration: this.duration,
                            className: this.overlayClass,
                            customStyle: this.overlayStyle
                        });
                    } else {
                        closeOverlay(this);
                    }
                });
            },

            updateZIndex(value = 0) {
                //cansole.log("this is the update Index")
                //cansole.log(this.$el.style)
                //todo why we need to update index in the mixins class
                // the style is base on the overlay is able have zIndex, if the zIndex is null , system through error
                this.$el.style.zIndex = ++context.zIndex + value;
            }
        }
    };
}
