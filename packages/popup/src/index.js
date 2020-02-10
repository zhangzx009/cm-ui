import {createNamespace, isDef} from '@cm-ui/cm-utils/src';
import {PopupMixin} from './mixins';
import Icon from '@cm-ui/icon';
import './index.less'


/*
*  todo
*   1. transition error with not display layout
*
* */
const [createComponent, bem] = createNamespace('popup');

const Popup = {
    mixins: [PopupMixin()],

    props: {
        round: Boolean,
        duration: Number,
        closeable: Boolean,
        transition: String,
        safeAreaInsetBottom: Boolean,
        closeIcon: {
            type: String,
            default: 'cross'
        },
        closeIconPosition: {
            type: String,
            default: 'top-right'
        },
        position: {
            type: String,
            default: 'center'
        },
        overlay: {
            type: Boolean,
            default: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        }
    },

    beforeCreate() {
        const createEmitter = eventName => event => this.$emit(eventName, event);
        this.onClick = createEmitter('click');
        this.onOpened = createEmitter('opened');
        this.onClosed = createEmitter('closed');
    },

    render() {
        //console.log("this is the popup render trigger ~~~~~~~~")
        if (!this.shouldRender) {
            //cansole.log(this.shouldRender)
            return;
        }

        const {round, position, duration} = this;

        const transitionName = this.transition || (position === 'center' ? 'cm-fade' : `cm-popup-slide-${position}`);

        const style = {};
        if (isDef(duration)) {
            style.transitionDuration = `${duration}s`;
        }
        /*  v directive vShow == v-show
        *
        *
        * */
        return (
            // <transition
            //     name={transitionName}
            //     onAfterEnter={this.onOpened}
            //     onAfterLeave={this.onClosed}
            // >
                <div
                    vShow={this.value}
                    style={style}
                    class={bem({
                        round,
                        [position]: position,
                        'safe-area-inset-bottom': this.safeAreaInsetBottom
                    })}
                    onClick={this.onClick}
                >
                    {this.slots()}
                    {this.closeable && (
                        <Icon
                            role="button"
                            tabindex="0"
                            name={this.closeIcon}
                            class={bem('close-icon', this.closeIconPosition)}
                            onClick={this.close}
                        />
                    )}
                </div>
            //</transition>
        );
    }
}

export default createComponent(Popup)
