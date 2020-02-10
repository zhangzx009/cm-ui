<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/example">Example</router-link> |
            <router-link to="/info">Info</router-link> |
            <router-link to="/image">Image</router-link> |
            <router-link to="/picker">Picker</router-link> |
            <router-link to="/overlay">Overlay</router-link> |
            <router-link to="/popup">Popup</router-link> |
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                routerLink:[]
            }
        }
    }

</script>

<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        margin-top 60px
    #nav
        padding  5% auto
</style>
