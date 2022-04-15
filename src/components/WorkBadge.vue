<template>
    <div class="WorkBadge">
        <img class="WorkBadge__icon" :src="require(`../assets/${icon}`)"/>
        <p class="WorkBadge__title">{{ title }}</p>
        <slot />
    </div>
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
        skills: {
            type: Array,
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
    /* padding: 50px;*/
    &__title {
        color: white;
        font-weight: bold;
    }

    &__icon {
        border-radius: 10px;
        width: 100%;
    }
}
</style>