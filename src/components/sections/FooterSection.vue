<template>
    <div class="Footer">
        <p class="Footer__description">Designed and Developed by Maksym Yankivskyy</p>
    </div>
</template>

<script>
export default {
    name: 'FooterSection',
}
</script>
<style lang="scss">
.Footer {
    &__description {
        margin: 0;
        font-size: 16px;
        color: $font_color;
        padding: 10% 20%;
        text-align: center;
    }
}
</style>