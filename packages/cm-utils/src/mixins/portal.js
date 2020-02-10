import Vue from 'vue';

function getElement(selector) {
    if (typeof selector === 'string') {
        return document.querySelector(selector);
    }
    // getContainer if not a string then is a function
    return selector();
}

export function PortalMixin({ref, afterPortal}) {
    return Vue.extend({
        props: {
            getContainer: [String, Function]
        },

        watch: {
            getContainer: 'portal'
        },

        mounted() {
            console.log("eeeeeeeeeeeee this is mounted")
            if (this.getContainer) {
                this.portal();
            }
        },

        methods: {
            portal() {
                console.log('execute portal&&&&&&&&&&&&')
                const {getContainer} = this;
                const el = ref ? this.$refs[ref] : this.$el;
                let container;
                if (getContainer) {
                    container = getElement(getContainer);
                } else if (this.$parent) {
                    container = this.$parent.$el;
                }

                if (container && container !== el.parentNode) {
                    console.log('this is container executed~')
                    container.appendChild(el);
                }
                console.log(container)
                if (afterPortal) {
                    afterPortal.call(this);
                }
            }
        }
    });
}
