<template>
  <div class="landing" id="home">
    <!-- <div class="nav">
      <p class="nav__icon">M</p>
      <img class="nav__burger" src="../../assets/Menu.png" alt="" srcset="">
    </div> -->
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
/* .nav {
  display: flex;
  justify-content: space-between;
  margin-top: 10%;

  &__icon {
    font-size: 32px;
    font-weight: bold;
    color: $main_color;
    margin: 0;
  }
  &__burger{
    width: 40px;
    height: 24px;
  } 
} */
.landing {
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  &__title{
    margin-top: 40%;
    color: $font_color;
    font-weight: bold;
    font-size: 24px;
  }
  &__title-hello {
    margin: 0;
    font-size: 20px;
    font-weight: lighter;
  }
  &__title-name {
    color: $main_color;
  }
}
</style>
