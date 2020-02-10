<template>
    <div class="mobile-device">
        <div>
            <cm-divider
                    :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
            ></cm-divider>
            <cm-icon name="like-o" dot></cm-icon>
            <cm-icon name="like-o" info="20"></cm-icon>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'CmExample',

    }
</script>

<style scoped>
    @import "~@cm-ui/divider/lib/divider.css";
    @import "~@cm-ui/cm-utils/lib/utils.css";
    @import "~@cm-ui/info/lib/info.css";
    @import "~@cm-ui/icon/lib/icon.css";

    .mobile-device {
        width: 474px;
        height: 736px;
        border: 1px solid black;
    }
</style>
