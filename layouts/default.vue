<template>
	<div>
		<Header />
		<div className="flex flex-col justify-between min-h-screen">
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script>

<style scoped></style>
