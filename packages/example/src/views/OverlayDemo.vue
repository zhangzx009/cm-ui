<template>
    <div>
        <h1>this is the overlay example</h1>
        <button @click="showOverlay">show</button>
        <cm-overlay :show="show">
            <div class="wrapper" @click="showOverlay">
                this is the overlay
                <div class="block"/>
            </div>
        </cm-overlay>
    </div>
</template>

<script>
    export default {
        name: "OverlayDemo",
        data() {
            return {
                show: false
            }
        },
        methods: {
            showOverlay() {
                this.show = !this.show
            }
        }
    }
</script>

<style>
    @import "~@cm-ui/overlay/lib/overlay.css";
    @import "~@cm-ui/cm-utils/lib/utils.css";

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #333333;
    }
</style>
