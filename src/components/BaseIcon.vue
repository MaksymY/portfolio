<template>
	<svg>
		<title
			v-if="$slots.default"
		><slot/></title>
		<use
			:href="href.startsWith('#') ? href : `#${href}`"
			:class="styles"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: true,
			validator: v => typeof v === "string" && !!v.length,
		},
		styles: {
			type: [String, Array, Object],
			required: false,
		},
	},
};
</script>