<template>
    <div class="Footer">
        <section class="Footer__socialNetwork">
            <a class="Footer__socialNetwork-link" href="https://www.linkedin.com/in/maksym-yankivskyy">
                <BaseIcon class="Footer__socialNetwork-icon" href="github"/>
            </a>
            <a class="Footer__socialNetwork-link" href="https://github.com/MaksymY">
                <BaseIcon class="Footer__socialNetwork-icon" href="linkedin"/>
            </a>
        </section>
        <p class="Footer__description">Designed and Developed by Maksym Yankivskyy</p>
    </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue"
export default {
    name: 'FooterSection',
    components: {
        BaseIcon,
    }
}
</script>
<style lang="scss">
.Footer {
    padding: 10% 20%;
    &__socialNetwork {
        display: flex;
        justify-content: center;
        gap: 10%;
    }
    &__socialNetwork-link {
        text-decoration: none;
    }
    &__socialNetwork-icon {
        width: 34px;
        height: 34px;
        fill: $font-color;
        stroke: $font-color;
    }
    &__description {
        margin: 10% 0 0 0;
        font-size: 16px;
        color: $font_color;
        text-align: center;
    }
}
</style>