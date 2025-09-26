<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Brain, Zap, BarChart3, Cpu, Shield, Code, ArrowRight, Check, Users, Target, Clock } from 'lucide-svelte';
  
  $: metadata = {
    title: 'AI-Powered Features - Neural Nexus Studios',
    description: 'Discover the powerful features of our AI solutions designed to transform your business operations.'
  };

  const features = [
    {
      title: 'Advanced Machine Learning',
      description: 'Leverage cutting-edge machine learning algorithms to extract valuable insights from your data.',
      icon: Brain,
      color: 'text-purple-500'
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights with our real-time data processing and visualization tools.',
      icon: BarChart3,
      color: 'text-blue-500'
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline your operations with intelligent process automation.',
      icon: Zap,
      color: 'text-yellow-500'
    },
    {
      title: 'Predictive Modeling',
      description: 'Forecast trends and behaviors with our advanced predictive analytics.',
      icon: Cpu,
      color: 'text-green-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols to protect your sensitive data.',
      icon: Shield,
      color: 'text-red-500'
    },
    {
      title: 'Custom Integration',
      description: 'Seamlessly connect with your existing tools and systems.',
      icon: Code,
      color: 'text-indigo-500'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime', icon: Clock },
    { value: '10x', label: 'Faster Processing', icon: Zap },
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '4.9/5', label: 'Customer Rating', icon: Target }
  ];
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
</svelte:head>

<div class="pt-16">
  <!-- Hero Section -->
  <div class="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-3xl">
        <nav class="flex mb-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="/" class="inline-flex items-center text-sm font-medium text-primary-100 hover:text-white">
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-primary-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="text-sm font-medium text-white">Features</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Powerful AI Features</h1>
        <p class="text-xl text-primary-100 max-w-3xl">
          Discover how our advanced AI features can transform your business operations and drive growth.
        </p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="#all-features" class="btn-outline-white">View All Features</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats Section -->
  <div class="bg-white dark:bg-neural-900 py-12">
    <div class="container-max">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each stats as stat}
          <div class="text-center p-4">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.value}
            </div>
            <div class="flex items-center justify-center text-neural-600 dark:text-neural-400">
              <svelte:component this={stat.icon} class="h-5 w-5 mr-2" />
              {stat.label}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Features Grid -->
  <div id="all-features" class="py-16 md:py-24 bg-neural-50 dark:bg-neural-950/50">
    <div class="container-max">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
          Our Features
        </span>
        <h2 class="text-3xl font-bold mb-4">Comprehensive AI Solutions</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          Explore the powerful features that make our AI platform the right choice for your business.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each features as feature}
          <div 
            class="bg-white dark:bg-neural-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            in:fade
          >
            <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
              <svelte:component this={feature.icon} class={`h-6 w-6 ${feature.color}`} />
            </div>
            <h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
            <p class="text-neural-600 dark:text-neural-400 mb-4">{feature.description}</p>
            <button class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors">
              Learn more
              <ArrowRight class="ml-1 h-4 w-4" />
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-gradient-to-r from-primary-600 to-primary-500 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Power of AI?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Get started today and see how our AI solutions can transform your business.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="/pricing" class="btn-outline-white">View Pricing</a>
        </div>
      </div>
    </div>
  </div>
</div>
