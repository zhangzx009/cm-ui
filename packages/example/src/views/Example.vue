<template>
    <div class="example">
        <h1>this is the cm example</h1>
        <div class="example-demo">
            <cm-example></cm-example>
        </div>
    </div>
</template>

<script>
    import CmExample from '@/components/CmExample.vue'

    export default {
        name: "Example",
        components: {
            CmExample
        }
    }
</script>

<style scoped>
    .example {

    }

    .example-demo {
        margin: 100px 50%;
    }
</style>
