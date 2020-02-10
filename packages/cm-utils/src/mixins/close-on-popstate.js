import Vue from 'vue';
import {on, off} from '../dom/event';
import {BindEventMixin} from './bind-event';


//todo bindEvent Refactor needed
export const CloseOnPopstateMixin = Vue.extend({

    mixins: [
        BindEventMixin(function (BindEventHandler, bind, isBind) {
            this.handlePopstate(isBind && this.closeOnPopstate);
        })

    ],


    props: {
        closeOnPopstate: Boolean
    },

    data() {
        return {
            bindStatus: false
        };
    },

    watch: {
        closeOnPopstate(val) {
            this.handlePopstate(val);
        }
    },

    methods: {
        handlePopstate(bind) {
            /* istanbul ignore if */
            if (this.$isServer) {
                return;
            }
            console.log("((((((((((((((((((((handle PopState")
            if (this.bindStatus !== bind) {
                this.bindStatus = bind;
                const action = bind ? on : off;
                action(window, 'popstate', this.close);
            }
        }
    }
});


