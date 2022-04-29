<template>
    <div class="SkillBadge">
        <BaseIcon class="SkillBadge__icon" :href="icon"/>
        <p class="SkillBadge__title">{{ title }}</p>
        <slot/>
    </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
export default {
    name: 'SkillBadge',
    components: {
        BaseIcon,
    },
    props: {
        icon: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
    }
}
</script>
<style lang="scss">
.SkillBadge {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background-color: $font_color;
    border-radius: 10px;
    padding: 50px;

    @media (min-width:900px) {
        width: 45%;
    }

    &__title {
        color: white;
        font-weight: bold;
    }

    &__icon {
        width: 57px;
        height: 36px;
    }
}
</style>
