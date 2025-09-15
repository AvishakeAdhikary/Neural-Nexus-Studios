<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Users, Award, TrendingUp, Globe } from 'lucide-svelte';
	
	let mounted = false;
	let countersVisible = false;
	let counters = [0, 0, 0, 0];
	
	onMount(() => {
		mounted = true;
		
		// Intersection Observer for counter animation
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !countersVisible) {
					countersVisible = true;
					animateCounters();
				}
			});
		}, { threshold: 0.3 });
		
		const statsSection = document.getElementById('stats-section');
		if (statsSection) {
			observer.observe(statsSection);
		}
		
		return () => observer.disconnect();
	});
	
	const stats = [
		{
			icon: Users,
			value: 500,
			suffix: '+',
			label: 'Happy Clients',
			description: 'Companies trust our AI solutions'
		},
		{
			icon: Award,
			value: 98,
			suffix: '%',
			label: 'Success Rate',
			description: 'Projects completed successfully'
		},
		{
			icon: TrendingUp,
			value: 247,
			suffix: '%',
			label: 'ROI Average',
			description: 'Return on investment for clients'
		},
		{
			icon: Globe,
			value: 50,
			suffix: '+',
			label: 'Countries',
			description: 'Global reach and presence'
		}
	];
	
	function animateCounters() {
		stats.forEach((stat, index) => {
			let current = 0;
			const increment = stat.value / 100;
			const duration = 2000;
			const stepTime = duration / 100;
			
			const timer = setInterval(() => {
				current += increment;
				if (current >= stat.value) {
					counters[index] = stat.value;
					clearInterval(timer);
				} else {
					counters[index] = Math.floor(current);
				}
				counters = [...counters];
			}, stepTime);
		});
	}
</script>

<section 
	id="stats-section"
	class="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-10">
		<svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
			<defs>
				<pattern id="statsPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
					<circle cx="50" cy="50" r="2" fill="currentColor" />
					<circle cx="25" cy="25" r="1" fill="currentColor" />
					<circle cx="75" cy="75" r="1" fill="currentColor" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#statsPattern)" />
		</svg>
	</div>
	
	<div class="container-max relative z-10">
		{#if mounted}
			<!-- Section Header -->
			<div class="text-center mb-16" in:fade={{ duration: 600, delay: 100 }}>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
					Proven Results That
					<span class="text-primary-200">Speak Volumes</span>
				</h2>
				<p class="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
					Our track record of success demonstrates our commitment to delivering exceptional AI solutions that drive measurable business impact.
				</p>
			</div>
			
			<!-- Stats Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each stats as stat, index}
					<div 
						class="text-center group"
						in:fly={{ y: 50, duration: 600, delay: index * 150 }}
					>
						<!-- Icon -->
						<div class="relative mb-6">
							<div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
								<svelte:component this={stat.icon} class="h-10 w-10 text-primary-100" />
							</div>
							<div class="absolute inset-0 bg-white/10 rounded-2xl mx-auto w-20 h-20 blur-lg group-hover:bg-white/20 transition-colors duration-300"></div>
						</div>
						
						<!-- Counter -->
						<div class="mb-4">
							<div class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
								{countersVisible ? counters[index] : 0}{stat.suffix}
							</div>
							<div class="text-xl font-semibold text-primary-100 mb-2">
								{stat.label}
							</div>
							<div class="text-primary-200 text-sm leading-relaxed">
								{stat.description}
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Bottom Section -->
			<div class="mt-16 text-center" in:fade={{ duration: 600, delay: 800 }}>
				<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
					<h3 class="text-2xl font-bold mb-4">
						Join the AI Revolution
					</h3>
					<p class="text-primary-100 mb-6 leading-relaxed">
						These numbers represent real businesses, real challenges, and real solutions. 
						Become part of our success story and transform your business with cutting-edge AI technology.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a 
							href="/case-studies" 
							class="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
						>
							View Case Studies
						</a>
						<a 
							href="/contact" 
							class="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-primary-500 hover:border-primary-400 transform hover:-translate-y-0.5"
						>
							Start Your Project
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>