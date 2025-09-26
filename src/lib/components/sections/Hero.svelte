<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Brain, Sparkles, ArrowRight, Play, Star, TrendingUp } from 'lucide-svelte';
	
	let mounted = false;
	let videoPlaying = false;
	
	onMount(() => {
		mounted = true;
	});
	
	function toggleVideo() {
		videoPlaying = !videoPlaying;
	}
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Animated Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-neural-50 via-white to-primary-50 dark:from-neural-950 dark:via-neural-900 dark:to-neural-950">
		<!-- Animated neural network background -->
		<div class="absolute inset-0 opacity-30">
			<svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
				<defs>
					<radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="rgb(14 165 233)" stop-opacity="0.8"/>
						<stop offset="100%" stop-color="rgb(14 165 233)" stop-opacity="0"/>
					</radialGradient>
				</defs>
				
				<!-- Neural network nodes -->
				<circle cx="200" cy="200" r="4" fill="url(#nodeGradient)" class="animate-pulse">
					<animate attributeName="r" values="2;6;2" dur="4s" repeatCount="indefinite"/>
				</circle>
				<circle cx="400" cy="150" r="3" fill="url(#nodeGradient)" class="animate-pulse animation-delay-200">
					<animate attributeName="r" values="1;5;1" dur="3s" repeatCount="indefinite"/>
				</circle>
				<circle cx="600" cy="300" r="5" fill="url(#nodeGradient)" class="animate-pulse animation-delay-400">
					<animate attributeName="r" values="3;7;3" dur="5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="800" cy="250" r="3" fill="url(#nodeGradient)" class="animate-pulse animation-delay-600">
					<animate attributeName="r" values="2;6;2" dur="3.5s" repeatCount="indefinite"/>
				</circle>
				
				<!-- Neural connections -->
				<path d="M200,200 Q300,100 400,150" stroke="rgb(14 165 233)" stroke-width="1" fill="none" opacity="0.3">
					<animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="8s" repeatCount="indefinite"/>
				</path>
				<path d="M400,150 Q500,200 600,300" stroke="rgb(14 165 233)" stroke-width="1" fill="none" opacity="0.3">
					<animate attributeName="stroke-dasharray" values="50,50;100,0;0,100;50,50" dur="6s" repeatCount="indefinite"/>
				</path>
				<path d="M600,300 Q700,200 800,250" stroke="rgb(14 165 233)" stroke-width="1" fill="none" opacity="0.3">
					<animate attributeName="stroke-dasharray" values="100,0;0,100;50,50;100,0" dur="7s" repeatCount="indefinite"/>
				</path>
			</svg>
		</div>
		
		<!-- Floating particles -->
		<div class="absolute inset-0">
			{#each Array(20) as _, i}
				<div 
					class="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20 animate-float"
					style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation-delay: {Math.random() * 6}s; animation-duration: {6 + Math.random() * 4}s;"
				></div>
			{/each}
		</div>
	</div>
	
	{#if mounted}
		<div class="relative z-10 container-max section-padding">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Hero Content -->
				<div class="text-center lg:text-left" in:fly={{ y: 50, duration: 800, delay: 200 }}>
					<!-- Badge -->
					<div class="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 neural-glow">
						<Sparkles class="h-4 w-4" />
						<span>AI Innovation Leader 2024</span>
					</div>
					
					<!-- Main Heading -->
					<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
						<span class="gradient-text">Neural Intelligence</span>
						<br />
						<span class="text-neural-900 dark:text-neural-100">Meets Human</span>
						<br />
						<span class="text-neural-900 dark:text-neural-100">Innovation</span>
					</h1>
					
					<!-- Subtitle -->
					<p class="text-xl text-neural-600 dark:text-neural-300 mb-8 max-w-2xl leading-relaxed">
						Transform your business with cutting-edge AI solutions. We build intelligent systems that learn, adapt, and deliver unprecedented results for forward-thinking companies.
					</p>
					
					<!-- CTA Buttons -->
					<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
						<a href="/contact" class="btn-primary group">
							Start Your AI Journey
							<ArrowRight class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
						<button 
							on:click={toggleVideo}
							class="btn-secondary group"
						>
							<Play class="h-5 w-5 mr-2" />
							Watch Demo
						</button>
					</div>
					
					<!-- Trust Indicators -->
					<div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-neural-600 dark:text-neural-400">
						<div class="flex items-center space-x-2">
							<div class="flex -space-x-2">
								{#each Array(4) as _, i}
									<div class="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full border-2 border-white dark:border-neural-950 flex items-center justify-center text-white font-semibold text-xs">
										{String.fromCharCode(65 + i)}
									</div>
								{/each}
							</div>
							<span>500+ companies trust us</span>
						</div>
						<div class="flex items-center space-x-1">
							{#each Array(5) as _}
								<Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
							{/each}
							<span class="ml-1">4.9/5 rating</span>
						</div>
					</div>
				</div>
				
				<!-- Hero Visual -->
				<div class="relative" in:fly={{ x: 50, duration: 800, delay: 400 }}>
					<div class="relative bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 neural-glow">
						<!-- 3D Brain Visualization Placeholder -->
						<div class="aspect-square bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl flex items-center justify-center">
							<div class="relative">
								<Brain class="h-32 w-32 text-white animate-pulse-slow" />
								<div class="absolute inset-0 bg-white/20 rounded-full blur-xl animate-glow"></div>
							</div>
						</div>
						
						<!-- Floating Stats -->
						<div class="absolute -top-4 -right-4 bg-white dark:bg-neural-900 rounded-xl p-4 shadow-xl">
							<div class="flex items-center space-x-2">
								<div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<span class="text-sm font-semibold text-neural-700 dark:text-neural-300">99.9% Uptime</span>
							</div>
						</div>
						
						<div class="absolute -bottom-4 -left-4 bg-white dark:bg-neural-900 rounded-xl p-4 shadow-xl">
							<div class="flex items-center space-x-2">
								<div class="text-2xl font-bold gradient-text">247%</div>
								<span class="text-sm text-neural-600 dark:text-neural-400">ROI Average</span>
							</div>
						</div>
						
						<div class="absolute top-1/2 -left-6 bg-white dark:bg-neural-900 rounded-xl p-3 shadow-xl">
							<div class="flex items-center space-x-2">
								<TrendingUp class="h-5 w-5 text-green-500" />
								<span class="text-sm font-semibold text-neural-700 dark:text-neural-300">Real-time Analytics</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
	
	<!-- Video Modal -->
	{#if videoPlaying}
		<div 
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
			on:click={toggleVideo}
			on:keydown={(e) => e.key === 'Escape' && toggleVideo()}
			tabindex="0"
			role="button"
			aria-label="Close video modal"
			transition:fade={{ duration: 300 }}
		>
			<div class="relative max-w-4xl w-full mx-4" on:click|stopPropagation role="dialog" on:keydown={(e) => e.key === 'Escape' && toggleVideo()} tabindex="0">
				<button 
					on:click={toggleVideo}
					class="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors duration-300"
					aria-label="Close video modal"
				>
					<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<div class="aspect-video bg-neural-900 rounded-xl flex items-center justify-center">
					<div class="text-center text-white">
						<Play class="h-16 w-16 mx-auto mb-4 opacity-50" />
						<p class="text-lg">Demo video would be embedded here</p>
						<p class="text-sm opacity-70">Integration with YouTube/Vimeo recommended</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>