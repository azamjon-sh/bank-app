<template>
	<span
		class="app-icon"
		:style="{
			height: height,
			width: width,
			'line-height': 0,
			'vertical-align': 'middle',
		}"
		v-bind="$attrs"
		@click="$emit('icon-click', $event)"
		v-html="currentIcon"
	></span>
</template>

<script setup>
import { computed } from "vue";
import icons from "./iconpack.js";

const props = defineProps({
	icon: {
		required: true,
		type: String,
		default: () => "",
	},

	color: {
		required: false,
		type: String,
		default: () => "",
	},

	hoverColor: {
		required: false,
		type: String,
		default: () => "",
	},

	width: {
		required: false,
		type: String,
		default: () => "24px",
	},

	height: {
		required: false,
		type: String,
		default: () => "24px",
	},

	opacity: {
		required: false,
		type: Number,
		default: () => 1.0,
	},
});

const currentIcon = computed(() => {
	return icons[props.icon ? props.icon : "text-icon"];
});
</script>

<style lang="scss">
.app-icon {
	svg {
    margin: auto;
		width: v-bind(width);
		height: v-bind(height);
		opacity: v-bind(opacity);
	}
}
</style>
