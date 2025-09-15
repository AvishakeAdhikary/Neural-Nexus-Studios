<script>
	import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube, ArrowUp } from 'lucide-svelte';
	import { onMount } from 'svelte';
	
	let showScrollTop = false;
	
	onMount(() => {
		const handleScroll = () => {
			showScrollTop = window.scrollY > 400;
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	
	const currentYear = new Date().getFullYear();
	
	const footerSections = [
		{
			title: 'Services',
			links: [
				{ label: 'AI Consulting', href: '/services/ai-consulting' },
				{ label: 'Machine Learning', href: '/services/machine-learning' },
				{ label: 'Automation', href: '/services/automation' },
				{ label: 'Data Science', href: '/services/data-science' }
			]
		},
		{
			title: 'Products',
			links: [
				{ label: 'AI Platform', href: '/products/ai-platform' },
				{ label: 'Analytics Suite', href: '/products/analytics' },
				{ label: 'Automation Tools', href: '/products/automation' },
				{ label: 'Custom Solutions', href: '/products/custom' }
			]
		},
		{
			title: 'Company',
			links: [
				{ label: 'About Us', href: '/about' },
				{ label: 'Blog', href: '/blog' },
				{ label: 'Careers', href: '/careers' },
				{ label: 'Contact', href: '/contact' }
			]
		},
		{
			title: 'Resources',
			links: [
				{ label: 'Documentation', href: '/docs' },
				{ label: 'API Reference', href: '/api-docs' },
				{ label: 'Case Studies', href: '/case-studies' },
				{ label: 'White Papers', href: '/resources' }
			]
		}
	];
	
	const socialLinks = [
		{ icon: Twitter, href: 'https://twitter.com/neuralnexus', label: 'Twitter' },
		{ icon: Linkedin, href: 'https://linkedin.com/company/neural-nexus-studios', label: 'LinkedIn' },
		{ icon: Github, href: 'https://github.com/neural-nexus-studios', label: 'GitHub' },
		{ icon: Youtube, href: 'https://youtube.com/@neuralnexusstudios', label: 'YouTube' }
	];
</script>

<footer class="bg-neural-900 dark:bg-neural-950 text-white">
	<!-- Main Footer Content -->
	<div class="container-max section-padding">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
			<!-- Company Info -->
			<div class="lg:col-span-2">
				<div class="flex items-center space-x-3 mb-6">
					<div class="relative">
						<Brain class="h-8 w-8 text-primary-400" />
						<div class="absolute inset-0 bg-primary-400 rounded-full opacity-20 blur-sm"></div>
					</div>
					<span class="text-xl font-bold">Neural Nexus Studios</span>
				</div>
				
				<p class="text-neural-300 mb-6 leading-relaxed">
					Pioneering the future of artificial intelligence with cutting-edge solutions that transform businesses and empower innovation across industries.
				</p>
				
				<div class="space-y-3">
					<div class="flex items-center space-x-3 text-neural-300">
						<Mail class="h-5 w-5 text-primary-400" />
						<a href="mailto:contact@neuralnexusstudios.com" class="hover:text-primary-400 transition-colors duration-300">
							contact@neuralnexusstudios.com
						</a>
					</div>
					<div class="flex items-center space-x-3 text-neural-300">
						<Phone class="h-5 w-5 text-primary-400" />
						<a href="tel:+1-555-AI-NEXUS" class="hover:text-primary-400 transition-colors duration-300">
							+1-555-AI-NEXUS
						</a>
					</div>
					<div class="flex items-center space-x-3 text-neural-300">
						<MapPin class="h-5 w-5 text-primary-400" />
						<span>123 AI Innovation Drive, Tech Valley, CA 94000</span>
					</div>
				</div>
			</div>
			
			<!-- Footer Links -->
			{#each footerSections as section}
				<div>
					<h3 class="text-lg font-semibold mb-4">{section.title}</h3>
					<ul class="space-y-3">
						{#each section.links as link}
							<li>
								<a 
									href={link.href} 
									class="text-neural-300 hover:text-primary-400 transition-colors duration-300"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		
		<!-- Newsletter Signup -->
		<div class="border-t border-neural-800 mt-12 pt-8">
			<div class="max-w-md">
				<h3 class="text-lg font-semibold mb-3">Stay Updated</h3>
				<p class="text-neural-300 mb-4">Get the latest AI insights and product updates delivered to your inbox.</p>
				<form class="flex space-x-2">
					<input 
						type="email" 
						placeholder="Enter your email"
						class="flex-1 px-4 py-2 bg-neural-800 border border-neural-700 rounded-lg text-white placeholder-neural-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					/>
					<button type="submit" class="btn-primary px-6">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	</div>
	
	<!-- Footer Bottom -->
	<div class="border-t border-neural-800">
		<div class="container-max">
			<div class="flex flex-col md:flex-row items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
				<div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
					<p class="text-neural-400 text-sm">
						© {currentYear} Neural Nexus Studios. All rights reserved.
					</p>
					<div class="flex items-center space-x-4 text-sm">
						<a href="/privacy" class="text-neural-400 hover:text-primary-400 transition-colors duration-300">
							Privacy Policy
						</a>
						<span class="text-neural-600">•</span>
						<a href="/terms" class="text-neural-400 hover:text-primary-400 transition-colors duration-300">
							Terms of Service
						</a>
						<span class="text-neural-600">•</span>
						<a href="/cookies" class="text-neural-400 hover:text-primary-400 transition-colors duration-300">
							Cookie Policy
						</a>
					</div>
				</div>
				
				<!-- Social Links -->
				<div class="flex items-center space-x-4 mt-4 md:mt-0">
					{#each socialLinks as social}
						<a 
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="p-2 text-neural-400 hover:text-primary-400 hover:bg-neural-800 rounded-lg transition-all duration-300"
							aria-label={social.label}
						>
							<svelte:component this={social.icon} class="h-5 w-5" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>

<!-- Scroll to Top Button -->
{#if showScrollTop}
	<button
		on:click={scrollToTop}
		class="fixed bottom-6 right-6 z-40 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
		aria-label="Scroll to top"
	>
		<ArrowUp class="h-6 w-6" />
	</button>
{/if}