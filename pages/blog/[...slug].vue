<template>
	<main>
		<div class="flex items-center space-x-3">
			<div
				class="bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center h-8 w-8 p-2"
			>
				<nuxt-link to="/">
					<Icon
						class="text-gray-900 dark:text-gray-200"
						name="solar:home-bold-duotone"
					/>
				</nuxt-link>
			</div>

			<Icon
				class="text-gray-900 dark:text-gray-200"
				name="solar:alt-arrow-right-linear"
			/>

			<nuxt-link>Blog</nuxt-link>

			<Icon
				class="text-gray-900 dark:text-gray-200"
				name="solar:alt-arrow-right-linear"
			/>

			<nuxt-link>This is the title</nuxt-link>
		</div>
		<article>
			<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
				<header class="">
					<p class="my-5">Last updated on June 6 , 2022</p>
					<page-title>This is the blog title</page-title>
				</header>
			</div>
		</article>
	</main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
