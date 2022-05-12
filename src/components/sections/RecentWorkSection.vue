<template>
    <div class="RecentWork" id="work">
        <p class="RecentWork__title">{{ $t("work") }}</p>
        <section class="RecentWork__section-work">
            <WorkBadge
                title="Portfolio Anne Lise Ribeiro"
                href="https://anne-lise-ribeiro.fr/"
                description="AnneLise-description"
                technologie="AnneLise-techno"
            />
            <WorkBadge
                title="Mars Exodus"
                icon="MarsExodus"
                description="MarsExodus-description"
                technologie="MarsExodus-techno"
            />
            <WorkBadge
                title="Wonder"
                icon="Wonder"
                description="Wonder-description"
                technologie="Wonder-techno"
            />
            <WorkBadge
                title="Just Know"
                icon="JustKnow"
                href="https://just-know.netlify.app/"
                description="JustKnow-description"
                technologie="JustKnow-techno"
            />
            <WorkBadge
                title="Blog"
                icon="Blog"
                href="https://mafioso.netlify.app/"
                description="Blog-description"
                technologie="Blog-techno"
            />
        </section>
    </div>
</template>

<script>
import WorkBadge from "@/components/WorkBadge.vue";
export default {
    name: 'DesktopAnimation',
    components: {
        WorkBadge,
    }
}
</script>
<style lang="scss">
.RecentWork {
    &__title {
        margin: 0;
        font-size: 40px;
        color: $font-color;
        font-weight: bold;
        text-align: center;
    }

    &__description {
        color: white;
        margin: 0;
        padding: 10%;
    }

    &__section-work {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 10%;
        margin: 5% 0 5% 0;
        gap: 30px;

        @media (min-width:900px) {
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: row;
        }
    }

    &__list {
        color: white;
    }
}
</style>