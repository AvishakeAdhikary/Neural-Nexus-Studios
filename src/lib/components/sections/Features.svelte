<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Brain, Zap, Target, Shield, Users, TrendingUp, Sparkles, CheckCircle } from 'lucide-svelte';
	
	let mounted = false;
	let visibleFeatures = [];
	
	onMount(() => {
		mounted = true;
		
		// Intersection Observer for animations
		const observerOptions = {
			threshold: 0.2,
			rootMargin: '0px 0px -50px 0px'
		};
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const index = parseInt(entry.target.dataset.index);
					if (!visibleFeatures.includes(index)) {
						visibleFeatures = [...visibleFeatures, index];
					}
				}
			});
		}, observerOptions);
		
		// Observe feature cards
		document.querySelectorAll('[data-feature-card]').forEach(el => {
			observer.observe(el);
		});
		
		return () => observer.disconnect();
	});
	
	const features = [
		{
			icon: Brain,
			title: 'Advanced Neural Networks',
			description: 'Cutting-edge deep learning models that adapt and improve with your data, delivering unprecedented accuracy and insights.',
			benefits: ['99.9% accuracy rate', 'Real-time learning', 'Self-optimizing algorithms']
		},
		{
			icon: Zap,
			title: 'Lightning-Fast Processing',
			description: 'High-performance computing infrastructure that processes massive datasets in seconds, not hours.',
			benefits: ['10x faster processing', 'Parallel computing', 'Edge deployment ready']
		},
		{
			icon: Target,
			title: 'Precision Targeting',
			description: 'AI-powered analytics that identify opportunities and optimize strategies with surgical precision.',
			benefits: ['Predictive insights', 'Smart recommendations', 'Behavioral analysis']
		},
		{
			icon: Shield,
			title: 'Enterprise Security',
			description: 'Military-grade encryption and privacy-first architecture to protect your most sensitive data.',
			benefits: ['End-to-end encryption', 'GDPR compliant', 'Zero-trust architecture']
		},
		{
			icon: Users,
			title: 'Collaborative Intelligence',
			description: 'Human-AI collaboration tools that amplify your team\'s capabilities while maintaining full control.',
			benefits: ['Seamless integration', 'User-friendly interface', '24/7 support']
		},
		{
			icon: TrendingUp,
			title: 'Scalable Growth',
			description: 'Infrastructure that grows with your business, from startup to enterprise without compromise.',
			benefits: ['Auto-scaling', 'Pay-as-you-grow', 'Global deployment']
		}
	];
</script>

<section class="section-padding bg-neural-50 dark:bg-neural-900/50">
	<div class="container-max">
		{#if mounted}
			<!-- Section Header -->
			<div class="text-center mb-16" in:fade={{ duration: 600, delay: 100 }}>
				<div class="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
					<Sparkles class="h-4 w-4" />
					<span>Advanced AI Features</span>
				</div>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neural-900 dark:text-neural-100 mb-6">
					Why Choose
					<span class="gradient-text">Neural Nexus</span>
				</h2>
				<p class="text-xl text-neural-600 dark:text-neural-300 max-w-3xl mx-auto leading-relaxed">
					Experience the future of artificial intelligence with our comprehensive suite of AI-powered solutions designed to transform your business operations.
				</p>
			</div>
			
			<!-- Features Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each features as feature, index}
					<div 
						class="card p-8 group hover:neural-glow transition-all duration-500"
						data-feature-card
						data-index={index}
						in:fly={{ y: 50, duration: 600, delay: index * 100 }}
					>
						<!-- Icon -->
						<div class="relative mb-6">
							<div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<svelte:component this={feature.icon} class="h-8 w-8 text-white" />
							</div>
							<div class="absolute inset-0 bg-primary-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
						</div>
						
						<!-- Content -->
						<h3 class="text-xl font-bold text-neural-900 dark:text-neural-100 mb-4">
							{feature.title}
						</h3>
						<p class="text-neural-600 dark:text-neural-300 mb-6 leading-relaxed">
							{feature.description}
						</p>
						
						<!-- Benefits -->
						<ul class="space-y-2">
							{#each feature.benefits as benefit}
								<li class="flex items-center space-x-3">
									<CheckCircle class="h-4 w-4 text-primary-500 flex-shrink-0" />
									<span class="text-sm text-neural-600 dark:text-neural-400">{benefit}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
			
			<!-- Bottom CTA -->
			<div class="text-center mt-16" in:fade={{ duration: 600, delay: 800 }}>
				<a href="/features" class="btn-primary group">
					Explore All Features
					<svg class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>