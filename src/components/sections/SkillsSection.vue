<template>
    <div class="SkillPage" id="skills">
        <div class="SkillPage__header">
            <p class="SkillPage__header-title">My Skills</p>
            <p class="SkillPage__header-description">{{ $t("description-skills") }}</p>
        </div>
        <section ref="test" class="SkillPage__section-skills">
            <SkillBadge title="Front-End" icon="web-development">
                <p class="SkillPage__list">Vue.js, React.js, css, scss, html, pug</p>
            </SkillBadge>
            <SkillBadge title="Back-End" icon="web-development">
                <p class="SkillPage__list">Node.js, Express, MongoDB, Mongoose, AmazonWS</p>
            </SkillBadge>
            <SkillBadge title="Mobile" icon="mobile-development">
                <p class="SkillPage__list">Flutter, ReactNative</p>
            </SkillBadge>
        </section>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import useObserver from '@/composables/use-observer.js';
import SkillBadge from "@/components/SkillBadge.vue";
export default {
    name: 'DesktopAnimation',
    components: {
        SkillBadge,
    },
    setup() {
        let test = ref();
        onMounted(() => {
            useObserver(test.value, "apear");
        });
        return {
            test,
        }
    }
}
</script>
<style lang="scss">
.apear {
    transition: 1.5s;
    transform: translate(0px, -130px);
    opacity: 1 !important;
}
.SkillPage {
    &__header {
        background-color: $main_color;
        text-align: center;
        padding: 10% 10% 30% 10%;
        @media (min-width:900px) {
            padding: 5% 10% 10% 10%;
        }
    }
    &__header-title {
        color: white;
        font-size: 40px;
        font-weight: bold;
    }

    &__header-description {
        color: white;
        font-size: 20px;
    }

    &__section-skills {
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 10%;
        gap: 10px;

        @media (min-width:900px) {
            flex-direction: row;
        }
    }

    &__list {
        color: white;
    }
}
</style>