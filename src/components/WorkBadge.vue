<template>
    <div class="WorkBadge">
        <img class="WorkBadge__icon" :src="require(`../assets/${icon}.png`)"/>
        <div class="WorkBadge__content">
            <p class="WorkBadge__title">{{ title }}</p>
            <p class="WorkBadge__description">{{ $t(description) }}</p>
            <p class="WorkBadge__techno">{{ $t(technologie) }}</p>
            <a
                v-if="href"
                :href="href"
                class="WorkBadge__button"
                target="_blank"
            >{{ $t("see-more") }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkBadge',
    props: {
        icon: {
            type: String,
            default: "AnneLise",
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        technologie: {
            type: String,
        },
        href: {
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
    align-items: center;
    text-align: center;
    background-color: $font_color;
    border-radius: 10px;
    text-decoration: none;
    @media (min-width:900px) {
        width: 45%;
    }

    &__content {
        display: grid;
        grid-template-rows: 15% 50% 10% 25%;
        height: 400px;
        align-items: center;
    }
    &__title {
        color: white;
        font-weight: bold;
        margin: 0;
    }

    &__button {
        background-color: transparent;
        border-radius: 10px;
        font-size: 20px;
        color: white;
        border: 3px solid white;
        padding: 1em;
        width: 175px;
        margin: 30px;
        margin: 0;
        justify-self: center;
        text-decoration: none;
    }

    &__description {
        color: white;
        font-size: 16px;
        padding: 0 5%;
        margin: 0;
    }

    &__techno {
        color: white;
        font-size: 16px;
        margin: 0;
    }

    &__icon {
        border-radius: 10px;
        width: 100%;
    }
}
</style>