<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import Header from '$lib/components/SEO/Header.svelte';
	import Footer from '$lib/components/SEO/Footer.svelte';
	import SeoHead from '$lib/components/SEO/SeoHead.svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<ModeWatcher />
<SeoHead />

<div class="min-h-screen flex flex-col">
	{#if mounted}
		<Header />
		<main class="flex-1">
			<slot />
		</main>
		<Footer />
	{:else}
		<!-- Loading skeleton -->
		<div class="min-h-screen bg-white dark:bg-neural-950 animate-pulse">
			<div class="h-20 bg-neural-100 dark:bg-neural-900"></div>
			<div class="container-max section-padding">
				<div class="space-y-4">
					<div class="h-8 bg-neural-200 dark:bg-neural-800 rounded w-1/2"></div>
					<div class="h-4 bg-neural-200 dark:bg-neural-800 rounded w-3/4"></div>
					<div class="h-4 bg-neural-200 dark:bg-neural-800 rounded w-1/2"></div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>

export const prerender = true;