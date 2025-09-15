<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Brain, Database, Cog, BarChart3, ArrowRight, Sparkles } from 'lucide-svelte';
	
	let mounted = false;
	let activeService = 0;
	
	onMount(() => {
		mounted = true;
		
		// Auto-rotate services every 5 seconds
		const interval = setInterval(() => {
			activeService = (activeService + 1) % services.length;
		}, 5000);
		
		return () => clearInterval(interval);
	});
	
	const services = [
		{
			icon: Brain,
			title: 'AI Consulting',
			description: 'Strategic AI implementation guidance tailored to your business needs and industry requirements.',
			features: [
				'AI Strategy Development',
				'Technology Assessment',
				'Implementation Roadmap',
				'ROI Analysis & Planning'
			],
			image: '/api/placeholder/600/400',
			link: '/services/ai-consulting'
		},
		{
			icon: Database,
			title: 'Machine Learning',
			description: 'Custom ML models and algorithms that learn from your data to deliver actionable insights.',
			features: [
				'Custom Model Development',
				'Data Pipeline Creation',
				'Model Training & Optimization',
				'Performance Monitoring'
			],
			image: '/api/placeholder/600/400',
			link: '/services/machine-learning'
		},
		{
			icon: Cog,
			title: 'Automation',
			description: 'Intelligent process automation that streamlines operations and reduces manual workload.',
			features: [
				'Process Automation',
				'Workflow Optimization',
				'Robotic Process Automation',
				'Integration Services'
			],
			image: '/api/placeholder/600/400',
			link: '/services/automation'
		},
		{
			icon: BarChart3,
			title: 'Data Science',
			description: 'Advanced analytics and data science solutions to unlock the hidden value in your data.',
			features: [
				'Predictive Analytics',
				'Statistical Modeling',
				'Data Visualization',
				'Business Intelligence'
			],
			image: '/api/placeholder/600/400',
			link: '/services/data-science'
		}
	];
</script>

<section class="section-padding bg-white dark:bg-neural-950">
	<div class="container-max">
		{#if mounted}
			<!-- Section Header -->
			<div class="text-center mb-16" in:fade={{ duration: 600, delay: 100 }}>
				<div class="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
					<Sparkles class="h-4 w-4" />
					<span>Our Services</span>
				</div>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neural-900 dark:text-neural-100 mb-6">
					Comprehensive
					<span class="gradient-text">AI Solutions</span>
				</h2>
				<p class="text-xl text-neural-600 dark:text-neural-300 max-w-3xl mx-auto leading-relaxed">
					From strategy to implementation, we provide end-to-end AI services that drive real business value and competitive advantage.
				</p>
			</div>
			
			<!-- Services Content -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Service Tabs -->
				<div class="space-y-4" in:fly={{ x: -50, duration: 600, delay: 200 }}>
					{#each services as service, index}
						<button
							class="w-full text-left p-6 rounded-xl transition-all duration-300 {
								activeService === index 
									? 'bg-primary-50 dark:bg-primary-950/30 border-2 border-primary-200 dark:border-primary-800 neural-glow' 
									: 'bg-neural-50 dark:bg-neural-900/50 border-2 border-transparent hover:border-neural-200 dark:hover:border-neural-700'
							}"
							on:click={() => activeService = index}
						>
							<div class="flex items-start space-x-4">
								<div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center {
									activeService === index ? 'scale-110' : ''
								} transition-transform duration-300">
									<svelte:component this={service.icon} class="h-6 w-6 text-white" />
								</div>
								<div class="flex-1">
									<h3 class="text-xl font-bold text-neural-900 dark:text-neural-100 mb-2">
										{service.title}
									</h3>
									<p class="text-neural-600 dark:text-neural-300 mb-4 leading-relaxed">
										{service.description}
									</p>
									{#if activeService === index}
										<div class="space-y-2" transition:fade={{ duration: 300 }}>
											{#each service.features as feature}
												<div class="flex items-center space-x-2">
													<div class="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
													<span class="text-sm text-neural-600 dark:text-neural-400">{feature}</span>
												</div>
											{/each}
											<div class="pt-4">
												<a href={service.link} class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group">
													Learn More
													<ArrowRight class="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
												</a>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</button>
					{/each}
				</div>
				
				<!-- Service Visual -->
				<div class="relative" in:fly={{ x: 50, duration: 600, delay: 400 }}>
					<div class="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-2xl overflow-hidden neural-glow">
						<!-- Placeholder for service illustration -->
						<div class="h-full flex items-center justify-center">
							<div class="text-center">
								<svelte:component this={services[activeService].icon} class="h-24 w-24 mx-auto mb-4 text-primary-600 dark:text-primary-400 animate-float" />
								<h3 class="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-2">
									{services[activeService].title}
								</h3>
								<p class="text-primary-600 dark:text-primary-400 max-w-md">
									Interactive visualization and demo would be displayed here
								</p>
							</div>
						</div>
					</div>
					
					<!-- Floating Elements -->
					<div class="absolute -top-4 -right-4 bg-white dark:bg-neural-900 rounded-xl p-4 shadow-xl border border-neural-200 dark:border-neural-700">
						<div class="flex items-center space-x-2">
							<div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
							<span class="text-sm font-semibold text-neural-700 dark:text-neural-300">Active Projects: 247</span>
						</div>
					</div>
					
					<div class="absolute -bottom-4 -left-4 bg-white dark:bg-neural-900 rounded-xl p-4 shadow-xl border border-neural-200 dark:border-neural-700">
						<div class="text-center">
							<div class="text-2xl font-bold gradient-text">98.5%</div>
							<div class="text-sm text-neural-600 dark:text-neural-400">Success Rate</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Bottom CTA -->
			<div class="text-center mt-16" in:fade={{ duration: 600, delay: 600 }}>
				<p class="text-lg text-neural-600 dark:text-neural-300 mb-6">
					Ready to transform your business with AI?
				</p>
				<a href="/contact" class="btn-primary group">
					Schedule a Consultation
					<ArrowRight class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</div>
		{/if}
	</div>
</section>