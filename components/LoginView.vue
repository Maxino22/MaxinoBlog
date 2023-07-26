<template>
	<div>
		<div
			v-if="session"
			class="text-lg text-gray-500 dark:text-gray-400 xl:text-xl"
		>
			Logged in as <strong>Maxino. </strong>
			<nuxt-link>Logout</nuxt-link>
		</div>
		<div
			v-else
			class="mb-10 border-2 border-gray-400 dark:border-gray-600 rounded-md p-6"
		>
			<h2 class="text-2xl font-bold leading-8 tracking-tight">
				Login to Endorse
			</h2>
			<button
				class="px-4 py-2 flex items-center justify-center my-4 font-semibold text-lg text-white bg-primary-400 dark:bg-primary-600 hover:bg-primary-500 dark:hover:bg-primary-500 rounded"
			>
				Login
			</button>
			<p class="text-lg text-gray-500 dark:text-gray-400 xl:text-xl">
				Your information is only used to display your name and profile picture.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const session = ref(false)
</script>

<style scoped></style>
