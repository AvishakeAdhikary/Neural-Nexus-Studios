<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from 'lucide-svelte';
	
	let mounted = false;
	let currentTestimonial = 0;
	let autoSlide = true;
	
	onMount(() => {
		mounted = true;
		
		// Auto-slide testimonials
		const interval = setInterval(() => {
			if (autoSlide) {
				currentTestimonial = (currentTestimonial + 1) % testimonials.length;
			}
		}, 5000);
		
		return () => clearInterval(interval);
	});
	
	const testimonials = [
		{
			name: 'Sarah Johnson',
			position: 'CTO',
			company: 'TechCorp Solutions',
			image: '/api/placeholder/80/80',
			rating: 5,
			testimonial: 'Neural Nexus Studios transformed our entire data processing pipeline. Their AI solutions reduced our processing time by 75% while improving accuracy to 99.8%. The team\'s expertise and dedication are unmatched.',
			results: '75% faster processing, 99.8% accuracy'
		},
		{
			name: 'Michael Chen',
			position: 'CEO',
			company: 'InnovateLab',
			image: '/api/placeholder/80/80',
			rating: 5,
			testimonial: 'Working with Neural Nexus has been a game-changer for our startup. Their machine learning models helped us identify market opportunities we never knew existed, leading to a 300% increase in revenue.',
			results: '300% revenue increase'
		},
		{
			name: 'Emily Rodriguez',
			position: 'Data Director',
			company: 'Global Dynamics',
			image: '/api/placeholder/80/80',
			rating: 5,
			testimonial: 'The predictive analytics solution from Neural Nexus gave us unprecedented insights into customer behavior. We\'ve optimized our supply chain and reduced costs by $2.1M annually.',
			results: '$2.1M annual cost savings'
		},
		{
			name: 'David Thompson',
			position: 'VP of Operations',
			company: 'Manufacturing Plus',
			image: '/api/placeholder/80/80',
			rating: 5,
			testimonial: 'Their automation solutions revolutionized our manufacturing process. We achieved 24/7 operations with minimal human intervention and zero quality issues in the past 6 months.',
			results: '24/7 operations, zero defects'
		}
	];
	
	function nextTestimonial() {
		autoSlide = false;
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		setTimeout(() => autoSlide = true, 10000);
	}
	
	function prevTestimonial() {
		autoSlide = false;
		currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
		setTimeout(() => autoSlide = true, 10000);
	}
	
	function goToTestimonial(index) {
		autoSlide = false;
		currentTestimonial = index;
		setTimeout(() => autoSlide = true, 10000);
	}
</script>

<section class="section-padding bg-neural-50 dark:bg-neural-900/50">
	<div class="container-max">
		{#if mounted}
			<!-- Section Header -->
			<div class="text-center mb-16" in:fade={{ duration: 600, delay: 100 }}>
				<div class="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
					<Sparkles class="h-4 w-4" />
					<span>Client Success Stories</span>
				</div>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neural-900 dark:text-neural-100 mb-6">
					What Our Clients
					<span class="gradient-text">Say About Us</span>
				</h2>
				<p class="text-xl text-neural-600 dark:text-neural-300 max-w-3xl mx-auto leading-relaxed">
					Don't just take our word for it. Hear directly from the businesses we've helped transform with our AI solutions.
				</p>
			</div>
			
			<!-- Testimonials Carousel -->
			<div class="relative max-w-4xl mx-auto">
				<div class="bg-white dark:bg-neural-900 rounded-2xl p-8 md:p-12 shadow-xl border border-neural-200 dark:border-neural-700 neural-glow">
					{#key currentTestimonial}
						<div 
							class="text-center"
							in:fly={{ x: 50, duration: 500 }}
						>
							<!-- Quote Icon -->
							<div class="mb-8">
								<Quote class="h-12 w-12 text-primary-500 mx-auto opacity-50" />
							</div>
							
							<!-- Testimonial Text -->
							<blockquote class="text-lg md:text-xl text-neural-700 dark:text-neural-200 leading-relaxed mb-8 font-medium">
								"{testimonials[currentTestimonial].testimonial}"
							</blockquote>
							
							<!-- Results Badge -->
							<div class="inline-flex items-center bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
								<TrendingUp class="h-4 w-4 mr-2" />
								{testimonials[currentTestimonial].results}
							</div>
							
							<!-- Rating -->
							<div class="flex justify-center mb-6">
								{#each Array(testimonials[currentTestimonial].rating) as _}
									<Star class="h-5 w-5 fill-yellow-400 text-yellow-400" />
								{/each}
							</div>
							
							<!-- Author Info -->
							<div class="flex items-center justify-center space-x-4">
								<div class="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
									<span class="text-white font-bold text-lg">
										{testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
									</span>
								</div>
								<div class="text-left">
									<div class="font-semibold text-neural-900 dark:text-neural-100">
										{testimonials[currentTestimonial].name}
									</div>
									<div class="text-neural-600 dark:text-neural-400">
										{testimonials[currentTestimonial].position}
									</div>
									<div class="text-primary-600 dark:text-primary-400 font-medium">
										{testimonials[currentTestimonial].company}
									</div>
								</div>
							</div>
						</div>
					{/key}
				</div>
				
				<!-- Navigation Buttons -->
				<button
					on:click={prevTestimonial}
					class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-neural-800 border border-neural-200 dark:border-neural-700 rounded-full flex items-center justify-center text-neural-600 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-lg"
					aria-label="Previous testimonial"
				>
					<ChevronLeft class="h-6 w-6" />
				</button>
				
				<button
					on:click={nextTestimonial}
					class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-neural-800 border border-neural-200 dark:border-neural-700 rounded-full flex items-center justify-center text-neural-600 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-lg"
					aria-label="Next testimonial"
				>
					<ChevronRight class="h-6 w-6" />
				</button>
			</div>
			
			<!-- Testimonial Dots -->
			<div class="flex justify-center space-x-2 mt-8">
				{#each testimonials as _, index}
					<button
						on:click={() => goToTestimonial(index)}
						class="w-3 h-3 rounded-full transition-all duration-300 {
							currentTestimonial === index 
								? 'bg-primary-600 w-8' 
								: 'bg-neural-300 dark:bg-neural-600 hover:bg-primary-400'
						}"
						aria-label="Go to testimonial {index + 1}"
					></button>
				{/each}
			</div>
			
			<!-- Company Logos -->
			<div class="mt-16" in:fade={{ duration: 600, delay: 400 }}>
				<p class="text-center text-neural-600 dark:text-neural-400 mb-8">
					Trusted by leading companies worldwide
				</p>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
					{#each testimonials as testimonial}
						<div class="flex items-center justify-center">
							<div class="text-2xl font-bold text-neural-400 dark:text-neural-500">
								{testimonial.company}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>