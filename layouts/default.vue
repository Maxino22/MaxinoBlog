<template>
	<div class="bg-white dark:bg-black">
		<Header />
		<SectionContainer>
			<div class="flex flex-col min-h-screen">
				<main>
					<slot />
				</main>
			</div>
		</SectionContainer>
	</div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script>

<style scoped></style>
