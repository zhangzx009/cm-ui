<template>
    <transition v-bind:name="transName">
        <div v-show="show"> this is the origin Way Transition {{msg}}</div>
    </transition>
</template>

<script>
    export default {
        name: "DemoTransition",
        props: {
            show: {type: Boolean},
            msg: {type: String},
            transName: {type: String}
        }
    }
</script>

<style scoped>

</style>
