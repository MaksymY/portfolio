<template>
    <a class="WorkBadge" :href="link">
        <img class="WorkBadge__icon" :src="require(`../assets/${icon}`)"/>
        <p class="WorkBadge__title">{{ title }}</p>
        <slot />
    </a>
</template>

<script>
export default {
    name: 'WorkBadge',
    props: {
        icon: {
            type: String,
            default: "AnneLise.png",
        },
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="scss">
.WorkBadge {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background-color: $font_color;
    border-radius: 10px;
    text-decoration: none;
    /* padding: 50px;*/
    &__title {
        color: white;
        font-weight: bold;
        margin: 0;
        padding: 10% 10% 0 10%;
    }

    &__icon {
        border-radius: 10px;
        width: 100%;
    }
}
</style>