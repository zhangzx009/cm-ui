/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 * b({status: 'active', color:'red'})
 */

const ELEMENT = '__';
const MODS = '--';

function join(name, el, symbol) {
    return el ? name + symbol + el : name;
}

function prefix(name, mods) {
    if (typeof mods === 'string') {
        return join(name, mods, MODS);
    }

    if (Array.isArray(mods)) {
        return mods.map(item => prefix(name, item));
    }

    const ret = {};
    // this has problem, 他们只做key
    if (mods) {
        Object.keys(mods).forEach(key => {
            ret[name + MODS + key] = mods[key];
        });
    }

    return ret;
}

export function createBEM(name) {
    return function (el, mods) {

        if (el && typeof el !== 'string') {
            mods = el;
            el = '';
        }
        el = join(name, el, ELEMENT);

        return mods ? [el, prefix(el, mods)] : el;
    };
}

