import {createBEM} from './bem';
import {createComponent} from './component';
import {createI18N} from './i18n';


export function createNamespace(name, prefix = 'cm-',) {
    let fullName = `${prefix}${name}`
    return [createComponent(fullName), createBEM(fullName), createI18N(fullName)];
}
