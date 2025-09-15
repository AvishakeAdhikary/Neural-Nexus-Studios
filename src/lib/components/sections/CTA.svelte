<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { ArrowRight, Calendar, MessageSquare, Sparkles, Zap } from 'lucide-svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<section class="section-padding bg-gradient-to-br from-neural-900 via-primary-900 to-neural-950 text-white relative overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0">
		<!-- Animated gradient overlay -->
		<div class="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent animate-pulse-slow"></div>
		
		<!-- Floating particles -->
		<div class="absolute inset-0">
			{#each Array(15) as _, i}
				<div 
					class="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30 animate-float"
					style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation-delay: {Math.random() * 8}s; animation-duration: {8 + Math.random() * 4}s;"
				></div>
			{/each}
		</div>
		
		<!-- Neural network pattern -->
		<svg class="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
			<defs>
				<linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="rgb(14 165 233)" stop-opacity="0.3"/>
					<stop offset="100%" stop-color="rgb(14 165 233)" stop-opacity="0"/>
				</linearGradient>
			</defs>
			
			<!-- Network connections -->
			<path d="M100,200 Q300,100 500,200 T900,300" stroke="url(#ctaGradient)" stroke-width="2" fill="none">
				<animate attributeName="stroke-dasharray" values="0,200;100,100;200,0;100,100;0,200" dur="12s" repeatCount="indefinite"/>
			</path>
			<path d="M200,400 Q400,300 600,400 T1000,500" stroke="url(#ctaGradient)" stroke-width="2" fill="none">
				<animate attributeName="stroke-dasharray" values="100,100;200,0;0,200;100,100" dur="10s" repeatCount="indefinite"/>
			</path>
		</svg>
	</div>
	
	<div class="container-max relative z-10">
		{#if mounted}
			<div class="max-w-4xl mx-auto text-center">
				<!-- Badge -->
				<div 
					class="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-200 px-6 py-3 rounded-full text-sm font-medium mb-8"
					in:fade={{ duration: 600, delay: 100 }}
				>
					<Sparkles class="h-4 w-4" />
					<span>Ready to Transform Your Business?</span>
				</div>
				
				<!-- Main Heading -->
				<h2 
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
					in:fly={{ y: 50, duration: 800, delay: 200 }}
				>
					Start Your
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">
						AI Journey
					</span>
					<br />
					Today
				</h2>
				
				<!-- Subtitle -->
				<p 
					class="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto"
					in:fade={{ duration: 600, delay: 400 }}
				>
					Join hundreds of forward-thinking companies that have already transformed their operations with our cutting-edge AI solutions. The future is here, and it starts with a conversation.
				</p>
				
				<!-- CTA Buttons -->
				<div 
					class="flex flex-col sm:flex-row gap-6 justify-center mb-12"
					in:fly={{ y: 30, duration: 600, delay: 600 }}
				>
					<a 
						href="/contact" 
						class="bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group neural-glow"
					>
						<span class="flex items-center justify-center">
							Schedule Free Consultation
							<ArrowRight class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
						</span>
					</a>
					<a 
						href="/demo" 
						class="border-2 border-primary-400 text-primary-100 hover:bg-primary-500/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm group"
					>
						<span class="flex items-center justify-center">
							<MessageSquare class="h-5 w-5 mr-2" />
							Request Demo
						</span>
					</a>
				</div>
				
				<!-- Value Propositions -->
				<div 
					class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
					in:fade={{ duration: 800, delay: 800 }}
				>
					<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
						<Calendar class="h-8 w-8 text-primary-300 mx-auto mb-4" />
						<h3 class="text-lg font-semibold text-primary-100 mb-2">Free Consultation</h3>
						<p class="text-primary-200 text-sm">
							30-minute strategy session to discuss your AI needs and potential solutions
						</p>
					</div>
					
					<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
						<Zap class="h-8 w-8 text-primary-300 mx-auto mb-4" />
						<h3 class="text-lg font-semibold text-primary-100 mb-2">Rapid Deployment</h3>
						<p class="text-primary-200 text-sm">
							Get your AI solution up and running in weeks, not months
						</p>
					</div>
					
					<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
						<MessageSquare class="h-8 w-8 text-primary-300 mx-auto mb-4" />
						<h3 class="text-lg font-semibold text-primary-100 mb-2">24/7 Support</h3>
						<p class="text-primary-200 text-sm">
							Round-the-clock technical support and monitoring for peace of mind
						</p>
					</div>
				</div>
				
				<!-- Trust Indicators -->
				<div 
					class="mt-16 pt-8 border-t border-primary-400/20"
					in:fade={{ duration: 600, delay: 1000 }}
				>
					<p class="text-primary-200 mb-6">Trusted by industry leaders worldwide</p>
					<div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
						<div class="text-primary-100 font-bold text-lg">TechCorp</div>
						<div class="text-primary-100 font-bold text-lg">InnovateLab</div>
						<div class="text-primary-100 font-bold text-lg">Global Dynamics</div>
						<div class="text-primary-100 font-bold text-lg">Manufacturing Plus</div>
						<div class="text-primary-100 font-bold text-lg">DataFlow Inc</div>
					</div>
				</div>
				
				<!-- Urgency Message -->
				<div 
					class="mt-12 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-xl p-6"
					in:fade={{ duration: 600, delay: 1200 }}
				>
					<p class="text-primary-100 font-medium">
						🚀 Limited Time: Free AI readiness assessment with every consultation booked this month
					</p>
				</div>
			</div>
		{/if}
	</div>
</section>