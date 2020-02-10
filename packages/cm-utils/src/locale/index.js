import Vue from 'vue';
import {deepAssign} from '../deep-assign';
import defaultMessages from './lang/zh-CN';


const proto = Vue.prototype;
const {defineReactive} = Vue.util;

defineReactive(proto, '$cmftLang', 'zh-CN');
defineReactive(proto, '$cmMessages', {
    'zh-CN': defaultMessages
});

export default {
    messages() {
        return proto.$cmMessages[proto.$cmftLang];
    },

    use(lang, messages) {
        proto.$cmftLang = lang;
        this.add({[lang]: messages});
    },

    add(messages = {}) {
        deepAssign(proto.$cmMessages, messages);
    }
};
