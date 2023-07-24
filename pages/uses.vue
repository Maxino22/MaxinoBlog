<template>
	<div
		class="prose dark:prose-dark"
		v-html="markdown().render(story.content.USES)"
	></div>
</template>

<script setup lang="ts">
import markdown from 'markdown-it'

const story = await useAsyncStoryblok('uses', { version: 'draft' })
</script>
