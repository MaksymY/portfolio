<template>
  <div class="landing" id="home">
    <div class="landing__title">
      <p class="landing__title-hello">Hello there i am</p>
      <p class="landing__title-name">Maksym Yankivskyy</p>
      <p class="landing__title-function">Full Stack Web & Mobile Developer</p>
    </div>
    <ComputerAnimation/>
  </div>
</template>

<script>
import ComputerAnimation from "@/components/animation/ComputerAnimation.vue";
export default {
    name: 'DesktopAnimation',
    components: {
      ComputerAnimation,
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
    justify-content: space-between;
    padding: 20% 10% 0 10%;
  }

  &__title{
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
    @media (min-width:900px) {
      font-size: 25px;
    }
  }

  &__title-function {
    font-size: 40px;
  }

  &__title-name {
    color: $main_color;
    @media (min-width:900px) {
      font-size: 40px;
    }
  }
}
</style>
