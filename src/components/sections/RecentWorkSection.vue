<template>
    <div class="RecentWork" id="work">
        <p class="RecentWork__title">{{ $t("work") }}</p>
        <section class="RecentWork__section-work">
            <WorkBadge title="Portfolio Anne Lise Ribeiro" href="https://anne-lise-ribeiro.fr/">
                <p class="RecentWork__description">Simple portfolio avec quelque effet au scroole avec un carousel pour chaque sections</p>
            </WorkBadge>
            <WorkBadge title="Portfolio Anne Lise Ribeiro" href="https://anne-lise-ribeiro.fr/">
                <p class="RecentWork__description">Simple portfolio avec quelque effet au scroole avec un carousel pour chaque sections</p>
            </WorkBadge>
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
        margin-top: 25px;
        gap: 10px;

        @media (min-width:900px) {
            flex-wrap: wrap;
            justify-content: space-around;
            flex-direction: row;
            margin-top: 80px;
        }
    }

    &__list {
        color: white;
    }
}
</style>