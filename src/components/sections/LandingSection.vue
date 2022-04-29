<template>
  <div class="landing" id="home">
    <div class="landing__title">
      <p class="landing__title-hello">{{ $t('hello') }}</p>
      <p class="landing__title-name">{{ $t('name') }}</p>
      <p class="landing__title-function">Full Stack Web &<br/>Mobile Developer</p>
      <div class="landing__name" v-if="isFrench">
        <ArrowAnimation class="landing__arrow"/>
        <p class="landing__arrow-text">Oui c'est<br>un peux original 😁</p>
      </div>
    </div>
    <ComputerAnimation/>
  </div>
</template>

<script>
import ComputerAnimation from "@/components/animation/ComputerAnimation.vue";
import ArrowAnimation from "@/components/animation/ArrowAnimation.vue";
export default {
    name: 'DesktopAnimation',
    components: {
      ComputerAnimation,
      ArrowAnimation
    },
    computed: {
      isFrench() {
        return this.$i18n.locale === "fr"
      }
    }
}
</script>
<style lang="scss">
.landing {
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width:900px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 20% 10% 0 10%;
  }

  &__name {
    display: none;
    position: absolute;
    top: -4%;
    right: -40%;
    @media (min-width:900px) {
      display: flex;
    }
  }

  &__arrow {
    height: 61px;
    width: 45px;
    transform: rotate(84deg);
  }

  &__arrow-text {
    font-size: 15px;
    margin: 0 0 0 20px;
    animation: apearText 2s ease-in-out;
  }

  &__title{
    position: relative;
    margin-top: 150px;
    color: $font_color;
    font-weight: bold;
    font-size: 24px;

    @media (min-width:900px) {
      margin-top: 0;
    }
  }
  &__title-hello {
    margin: 0;
    font-size: 20px;
    font-weight: lighter;
    animation: apearText 2s ease-in-out;
    @media (min-width:900px) {
      font-size: 25px;
    }
  }

  &__title-function {
    font-size: 40px;
    margin: 0;
    animation: apearText 2s ease-in-out;
  }

  &__title-name {
    color: $main_color;
    margin: 20px 0;
    animation:  apearText 2s ease-in-out;
    @media (min-width:900px) {
      font-size: 40px;
    }
  }
}
@keyframes apearText {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
