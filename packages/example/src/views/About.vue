<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="show=!show"> click this</button>
        <cm-transition msg="demo" v-bind:show="show" transName="slide-fade">
        </cm-transition>
<!--        <demo-transition msg="demo2" v-bind:show="show" transName="fake"></demo-transition>-->
    </div>
</template>
<script>
    import CmTransition from '../components/CmDemoTransition'

    export default {
        components: {
            CmTransition,
           // DemoTransition
        },
        data() {
            return {
                show: false
            }
        }
    }
</script>
<style>
    @import "../components/transition.css";
</style>
