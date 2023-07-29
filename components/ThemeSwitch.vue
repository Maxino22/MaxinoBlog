<template>
	<div @click="toggleTheme" class="cursor-pointer flex items-center w-12 h-6">
		<Icon
			size="20"
			v-if="colorMode.preference == 'dark'"
			class="text-white"
			name="solar:sun-2-bold"
		/>
		<Icon size="20" v-else class="text-black" name="solar:moon-bold" />
	</div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
	if (colorMode.preference == 'dark') {
		// Logic to enable dark theme
		colorMode.preference = 'light'
	} else {
		// Logic to enable light theme
		colorMode.preference = 'dark'
	}
}
</script>
