<script>
	import { page } from '$app/stores';
	import { toggleMode } from 'mode-watcher';
	import { Menu, X, Sun, Moon, Brain, ChevronDown } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	
	let mobileMenuOpen = false;
	let scrollY = 0;
	let mounted = false;
	
	// Navigation items
	const navItems = [
		{ href: '.', label: 'Home' },
		{ 
			href: 'services', 
			label: 'Services', 
			hasDropdown: true, 
			submenu: [
				{ href: 'services/ai-consulting', label: 'AI Consulting' },
				{ href: 'services/machine-learning', label: 'Machine Learning' },
				{ href: 'services/automation', label: 'Automation' },
				{ href: 'services/data-science', label: 'Data Science' }
			]
		},
		{ href: 'products', label: 'Products' },
		{ href: 'about', label: 'About' },
		{ href: 'blog', label: 'Blog' },
		{ href: 'contact', label: 'Contact' }
	];
	
	onMount(() => {
		mounted = true;
		const handleScroll = () => scrollY = window.scrollY;
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	$: isScrolled = scrollY > 50;
	$: currentPath = $page.url.pathname;
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function isActiveRoute(href) {
		if (href === '/') return currentPath === '/';
		return currentPath.startsWith(href);
	}
</script>

<svelte:window bind:scrollY />

<header 
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled 
		? 'bg-white/90 dark:bg-neural-950/90 backdrop-blur-md shadow-lg border-b border-neural-200/50 dark:border-neural-800/50' 
		: 'bg-transparent'}"
>
	<nav class="container-max">
		<div class="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
			<!-- Logo -->
			<a 
				href="." 
				class="flex items-center space-x-3 group"
				on:click={closeMobileMenu}
			>
				<div class="relative">
					<Brain class="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
					<div class="absolute inset-0 bg-primary-600 rounded-full opacity-20 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
				</div>
				<span class="text-xl font-bold gradient-text">Neural Nexus</span>
			</a>
			
			<!-- Desktop Navigation -->
			{#if mounted}
				<div class="hidden lg:flex items-center space-x-1">
					{#each navItems as item}
						<div class="relative group">
							<a 
								href={item.href}
								class="px-4 py-2 rounded-lg font-medium transition-all duration-300 {
									isActiveRoute(item.href) 
										? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30' 
										: 'text-neural-700 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neural-50 dark:hover:bg-neural-800/50'
								} {item.hasDropdown ? 'flex items-center space-x-1' : ''}"
							>
								{item.label}
								{#if item.hasDropdown}
									<ChevronDown class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
								{/if}
							</a>
							
							{#if item.hasDropdown && item.submenu}
								<div class="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
									<div class="bg-white dark:bg-neural-900 rounded-xl shadow-xl border border-neural-200 dark:border-neural-700 py-2 min-w-48">
										{#each item.submenu as subItem}
											<a 
												href={subItem.href}
												class="block px-4 py-2 text-sm text-neural-700 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neural-50 dark:hover:bg-neural-800/50 transition-colors duration-200"
											>
												{subItem.label}
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
			
			<!-- Desktop Actions -->
			<div class="hidden lg:flex items-center space-x-4">
				<button
					on:click={toggleMode}
					class="p-2 rounded-lg text-neural-700 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neural-100 dark:hover:bg-neural-800 transition-all duration-300 relative"
					aria-label="Toggle theme"
				>
					<Sun class="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
					<Moon class="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
				</button>
				<a href="contact" class="btn-primary">
					Get Started
				</a>
			</div>
			
			<!-- Mobile Menu Button and Theme Toggle -->
			<div class="flex items-center space-x-4 lg:hidden">
				<button
					on:click={toggleMode}
					class="p-2 rounded-lg text-neural-700 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 relative"
					aria-label="Toggle theme"
				>
					<Sun class="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
					<Moon class="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
				</button>
				<button
					on:click={toggleMobileMenu}
					class="p-2 rounded-lg text-neural-700 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
		
		<!-- Mobile Navigation Menu -->
		{#if mobileMenuOpen}
			<div 
				class="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-neural-950/95 backdrop-blur-md border-b border-neural-200 dark:border-neural-800 shadow-xl"
				transition:fly={{ y: -20, duration: 300 }}
			>
				<div class="px-4 py-6 space-y-2">
					{#each navItems as item}
						<div>
							<a 
								href={item.href}
								on:click={closeMobileMenu}
								class="block px-4 py-3 rounded-lg font-medium transition-all duration-300 {
									isActiveRoute(item.href) 
										? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30' 
										: 'text-neural-700 dark:text-neural-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neural-50 dark:hover:bg-neural-800/50'
								}"
							>
								{item.label}
							</a>
							{#if item.hasDropdown && item.submenu}
								<div class="ml-4 mt-2 space-y-1">
									{#each item.submenu as subItem}
										<a 
											href={subItem.href}
											on:click={closeMobileMenu}
											class="block px-4 py-2 text-sm text-neural-600 dark:text-neural-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neural-50 dark:hover:bg-neural-800/30 rounded-lg transition-colors duration-200"
										>
											{subItem.label}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
					<div class="pt-4 border-t border-neural-200 dark:border-neural-700">
						<a 
							href="contact" 
							on:click={closeMobileMenu}
							class="block w-full text-center btn-primary"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>

<!-- Spacer to prevent content overlap -->
<div class="h-20"></div>