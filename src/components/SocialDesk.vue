<template>
    <div class="deck">
        <div class="socialDeck">
            <a class="socialDeck__socialNetwork-link" href="https://github.com/MaksymY">
                <BaseIcon class="socialDeck__socialNetwork-icon" href="github"/>
            </a>
            <a class="socialDeck__socialNetwork-link" href="https://www.linkedin.com/in/maksym-yankivskyy">
                <BaseIcon class="socialDeck__socialNetwork-icon" href="linkedin"/>
            </a>
        </div>
        <div class="socialDeck__right">
            <a class="socialDeck__right-text">Maksym.yankivskyypro@gmail.com</a>
        </div>
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
.deck {
    @media (max-width:900px) {
        display: none;
    }
}
.socialDeck {
    position: fixed;
    bottom: 0px;
    left: 40px;
    bottom: 0px;
    right: auto;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;

    &::after {
        display: block;
        content: "";
        background-color: $font-color;
        width: 1px;
        height: 40vh;
        margin: 0px auto;
    }
    &__socialNetwork {
        display: flex;
        justify-content: center;
    }
    &__socialNetwork-link {
        text-decoration: none;
    }
    &__socialNetwork-icon {
        width: 28px;
        height: 28px;
        fill: $font-color;
        stroke: $font-color;
    }
    &__right {
        width: 40px;
        position: fixed;
        bottom: 0px;
        left: auto;
        right: 40px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;

        &::after {
            display: block;
            content: "";
            background-color: $font-color;
            width: 1px;
            height: 40vh;
        }
    }
    &__right-text {
        margin: 20px auto;
        padding: 10px;
        font-size: 12px;
        writing-mode: vertical-rl;
    }
}
</style>