<template>
	<main>
		<div class="pt-6 pb-8 space-y-23 md:space-y-5">
			<page-title>About</page-title>
		</div>
		<div
			class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0"
		>
			<div
				class="flex flex-col items-center xl:items-start pt-8 xl:sticky xl:top-12"
			>
				<nuxt-img
					:src="story.content.body[0].profilePicture.filename"
					:title="story.content.body[0].profilePicture.title"
					:alt="story.content.body[0].profilePicture.alt"
					class="rounded-full h-48 w-48 object-cover xl:rounded-lg"
				/>

				<h3 class="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
					{{ story.content.body[0].name }}
				</h3>
				<div class="text-gray-500 dark:text-gray-400">
					{{ story.content.body[0].title }}
				</div>
				<div class="flex pt-6 space-x-3">
					<!-- <pre>{{ story.content.body[0] }}</pre> -->
					<a title="ajaybullec@gmail.com" href="mailto:ajaybullec@gmail.com">
						<Icon
							size="40"
							class="text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300"
							name="material-symbols:mail"
						/>
					</a>
					<a title="Maxino22" href="https://github.com/Maxino22">
						<Icon
							size="40"
							class="text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300"
							name="mdi:github"
						/>
					</a>
					<a title="MaxwellMuhanda" href="https://twitter.com/MaxwellMuhanda">
						<Icon
							size="40"
							class="text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300"
							name="mdi:twitter"
						/>
					</a>
					<a
						title="Maxwell Muhanda"
						href="https://www.linkedin.com/in/maxwell-muhanda-5563b316b/"
					>
						<Icon
							size="40"
							class="text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300"
							name="mdi:linkedin"
						/>
					</a>
				</div>
			</div>
			<div class="py-8 max-w-none xl:col-span-2">
				<div
					v-html="markdown().render(story.content.body[0].profileData)"
					class="prose dark:prose-dark"
				></div>
				<div class="mt-14">
					<p>
						Last updated at
						{{
							useDateFormat(story.content.body[0].updated_at, 'MMM DD, YYYY')
								.value
						}}
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import markdown from 'markdown-it'

const story = await useAsyncStoryblok('about', { version: 'draft' })

useSeoMeta({
	description: 'About Me, This Website & Journey as a Developer',
})
</script>
