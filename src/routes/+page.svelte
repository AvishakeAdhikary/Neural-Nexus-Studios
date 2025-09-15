<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Brain, Zap, Target, Shield, ArrowRight, Play, Star, Users, Award, TrendingUp, CheckCircle, Sparkles } from 'lucide-svelte';
	import SeoHead from '$lib/components/SEO/SeoHead.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import Stats from '$lib/components/sections/Stats.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<SeoHead 
	title="Leading AI Solutions & Innovation"
	description="Neural Nexus Studios provides cutting-edge AI solutions, machine learning products, and intelligent automation services. Transform your business with our innovative artificial intelligence technologies."
	keywords="AI solutions, artificial intelligence, machine learning, neural networks, automation, AI consulting"
/>

{#if mounted}
	<div class="min-h-screen">
		<Hero />
		<Features />
		<Services />
		<Stats />
		<Testimonials />
		<CTA />
	</div>
{/if}