<template>
    <div class="SkillPage">
        <div class="SkillPage__header">
            <p class="SkillPage__header-title">My Skills</p>
            <p class="SkillPage__header-description">I Have start programmation four years ago. Actually i work in a good eterprise where i learn lot skills but essentialy i learn everythink by my self.
            </p>
        </div>
        <section class="SkillPage__section-skills">
            <SkillBadge :title="'Front-end'">
                <p class="SkillPage__list">Vue.js, React.js, css, scss, html, pug</p>
            </SkillBadge>
            <SkillBadge :title="'Back-end'">
                <p class="SkillPage__list">Vue.js, React.js, css, scss, html, pug</p>
            </SkillBadge>
            <SkillBadge :title="'Mobile'" :icon="'Phone.png'">
                <p class="SkillPage__list">Vue.js, React.js, css, scss, html, pug</p>
            </SkillBadge>
        </section>
    </div>
</template>

<script>
import SkillBadge from "@/components/SkillBadge.vue";
export default {
    name: 'DesktopAnimation',
    components: {
        SkillBadge,
    }
}
</script>
<style lang="scss">
.SkillPage {
    
    &__header {
        background-color: $main_color;
        text-align: center;
        padding: 10% 10% 30% 10%;
    }
    &__header-title {
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    &__header-description {
        color: white;
        font-size: 20px;
    }

    &__section-skills {
        transform: translate(0px, -90px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 10%;
        gap: 10px;
    }

    &__list {
        color: white;
    }
}
</style>