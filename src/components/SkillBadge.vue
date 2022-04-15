<template>
    <div class="SkillBadge">
        <img class="SkillBadge__icon" :src="require(`../assets/${icon}`)"/>
        <p class="SkillBadge__title">{{ title }}</p>
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SkillBadge',
    props: {
        icon: {
            type: String,
            default: "developIcon.png",
        },
        title: {
            type: String,
            required: true,
        },
        skills: {
            type: Array,
            required: true,
        }
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

    &__title {
        color: white;
        font-weight: bold;
    }

    &__icon {
        width: 20%;
        height: 20%;
    }
}
</style>
