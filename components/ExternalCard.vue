<template>
	<div
		ref="card"
		:style="{
			'--x': `${elementX}px`,
			'--y': `${elementY}px`,
		}"
		class="border-gradient group relative md:w-1/2 h-80 max-h-[34rem] rounded-xl bg-gray-700 p-8 before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl lg:p-16"
	>
		<div
			class="absolute inset-1 rounded-[11px] bg-[#202023] transition-colors duration-300 group-hover:bg-[#27272a]"
		></div>
		<div
			class="absolute inset-0 h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-800 hover:border-primary-600 dark:hover:border-primary-400"
		>
			<img
				src="https://www.thvu.dev/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F55167%2F1636557587-lineblockchainmain.png&w=640&q=75"
				class="z-50 object-cover object-center border-b border-solid lg:h-48 md:h-36"
				width="544"
				height="306"
			/>
			<div class="p-6">
				<h4
					class="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white"
				>
					Sample Title
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="ml-0.5 h-4 w-4 inline-block fill-current"
					>
						<g data-name="Layer 2">
							<g data-name="external-link">
								<rect width="24" height="24" opacity="0" />
								<path
									d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"
								/>
								<path
									d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"
								/>
							</g>
						</g>
					</svg>
				</h4>
				<p class="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ea?
					Velit, inventore rerum consectetur aspernatur impedit laboriosam
					veniam voluptas rem!
				</p>
				<div class="mt-4 text-xs text-gray-700 dark:text-gray-300"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const card = ref<HTMLDivElement>()

const { elementX, elementY } = useMouseInElement(card)
</script>

<style scoped>
.border-gradient::before {
	background: radial-gradient(
		300px circle at var(--x) var(--y),
		#1cd1c6 0,
		#407cff 50%,
		transparent 100%
	);
}
</style>
