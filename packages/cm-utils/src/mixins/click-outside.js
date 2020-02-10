/**
 * Listen to click outside event
 */
import Vue from 'vue';
import {on, off} from '@cm-ui/cm-utils/src/dom/event';


export const ClickOutsideMixin = (config) =>
    Vue.extend({
        props: {
            closeOnClickOutside: {
                type: Boolean,
                default: true
            }
        },

        data() {
            const clickOutsideHandler = (event) => {
                if (this.closeOnClickOutside && !this.$el.contains(event.target)) {
                    this[config.method]();
                }
            };

            return {clickOutsideHandler};
        },

        mounted() {
            on(document, config.event, this.clickOutsideHandler);
        },

        beforeDestroy() {
            off(document, config.event, this.clickOutsideHandler);
        }
    });
