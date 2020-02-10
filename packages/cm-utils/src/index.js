import Vue from 'vue';
import './style/base.less'
export { createNamespace } from './create';
export { addUnit } from './format/unit';

export const isServer = Vue.prototype.$isServer;

export function noop() {}

// check null
export function isDef(value) {
  return value !== undefined && value !== null;
}

export function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function get(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}
