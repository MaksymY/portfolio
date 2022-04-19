<template>
	<!-- <router-view/> -->
	<TheIconsSet />
	<NavBar/>
	<LandingSection />
	<SkillsSection />
	<RecentWorkSection />
	<WorkTogetherSection />
	<FooterSection />
</template>

<script>
import TheIconsSet from "@/components/TheIconsSet.vue"
import LandingSection from "@/components/sections/LandingSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import RecentWorkSection from "@/components/sections/RecentWorkSection.vue";
import WorkTogetherSection from "@/components/sections/WorkTogetherSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
		LandingSection,
		SkillsSection,
		RecentWorkSection,
		WorkTogetherSection,
		FooterSection,
		NavBar,
		TheIconsSet,
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
