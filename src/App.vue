<template>
	<!-- <router-view/> -->
	<LandingSection />
	<SkillsSection />
	<RecentWorkSection />
</template>

<script>
import LandingSection from "@/components/sections/LandingSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import RecentWorkSection from "@/components/sections/RecentWorkSection.vue";

export default {
    components: {
		LandingSection,
		SkillsSection,
		RecentWorkSection
	},
}
</script>

<style lang="scss">
html, body, #app {
	font-size: 24px;
	height: 100%;
	font-family: "Arial", "Lato-Regular", sans-serif;
	box-sizing: border-box;
}
</style>
