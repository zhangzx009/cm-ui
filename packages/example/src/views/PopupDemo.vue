<template>
    <div><p>this is the popup view demo</p>
        <button @click="show=!show">show up</button>

        <cm-popup v-model="show" position="top"
                  :style="{ height: '20%' }">内容
        </cm-popup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },

        methods: {
            showPopup() {
                this.show = true;
            }
        }
    };
</script>

<style scoped>
    @import "~@cm-ui/overlay/lib/overlay.css";
    @import "~@cm-ui/popup/lib/popup.css";
</style>
