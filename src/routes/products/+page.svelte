<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { ArrowRight, Check, Zap, BarChart3, Cpu, Database, Bot, Shield } from 'lucide-svelte';
  
  $: metadata = {
    title: 'AI Products & Solutions - Neural Nexus Studios',
    description: 'Explore our cutting-edge AI products and solutions designed to transform your business operations and drive growth.'
  };

  const products = [
    {
      id: 'nexus-ai-platform',
      name: 'Nexus AI Platform',
      description: 'An end-to-end AI platform that enables businesses to build, train, and deploy machine learning models at scale.',
      features: [
        'No-code model training',
        'Automated ML pipelines',
        'Real-time analytics',
        'Enterprise-grade security'
      ],
      icon: Cpu,
      category: 'Platform',
      highlight: true
    },
    {
      id: 'data-insight-suite',
      name: 'Data Insight Suite',
      description: 'Advanced analytics and visualization tools to turn your data into actionable business intelligence.',
      features: [
        'Interactive dashboards',
        'Predictive analytics',
        'Natural language queries',
        'Automated reporting'
      ],
      icon: BarChart3,
      category: 'Analytics'
    },
    {
      id: 'automation-hub',
      name: 'Automation Hub',
      description: 'Streamline your business processes with our intelligent automation solutions.',
      features: [
        'RPA integration',
        'Workflow automation',
        'Document processing',
        'Task orchestration'
      ],
      icon: Zap,
      category: 'Automation'
    },
    {
      id: 'customer-ai',
      name: 'Customer AI',
      description: 'Enhance customer experiences with AI-powered personalization and support.',
      features: [
        'Chatbots & virtual assistants',
        'Sentiment analysis',
        'Recommendation engines',
        '24/7 customer support'
      ],
      icon: Bot,
      category: 'Customer Experience'
    },
    {
      id: 'data-fabric',
      name: 'Data Fabric',
      description: 'A unified data management solution that connects all your data sources seamlessly.',
      features: [
        'Data integration',
        'Master data management',
        'Data quality tools',
        'Governance & compliance'
      ],
      icon: Database,
      category: 'Data Management'
    },
    {
      id: 'security-suite',
      name: 'AI Security Suite',
      description: 'Protect your digital assets with AI-powered threat detection and response.',
      features: [
        'Anomaly detection',
        'Threat intelligence',
        'Automated response',
        'Compliance monitoring'
      ],
      icon: Shield,
      category: 'Security'
    }
  ];

  const categories = ['All', 'Platform', 'Analytics', 'Automation', 'Customer Experience', 'Data Management', 'Security'];
  let selectedCategory = 'All';

  $: filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
</svelte:head>

<div class="py-16 md:py-24">
  <!-- Hero Section -->
  <div class="container-max text-center mb-16">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">AI Products & Solutions</h1>
    <p class="text-xl text-neural-600 dark:text-neural-400 max-w-3xl mx-auto">
      Discover our comprehensive suite of AI-powered products designed to transform your business operations and drive innovation.
    </p>
  </div>

  <!-- Category Filter -->
  <div class="container-max mb-12">
    <div class="flex flex-wrap justify-center gap-2">
      {#each categories as category}
        <button
          class={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-white dark:bg-neural-800 text-neural-700 dark:text-neural-300 hover:bg-neural-50 dark:hover:bg-neural-700'
          }`}
          on:click={() => selectedCategory = category}
        >
          {category}
        </button>
      {/each}
    </div>
  </div>

  <!-- Products Grid -->
  <div class="container-max">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProducts as product (product.id)}
        <div 
          class={`bg-white dark:bg-neural-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
            product.highlight ? 'ring-2 ring-primary-500' : ''
          }`}
          in:fade
        >
          {#if product.highlight}
            <div class="bg-gradient-to-r from-primary-600 to-primary-400 text-white text-xs font-medium px-3 py-1 text-center">
              Most Popular
            </div>
          {/if}
          
          <div class="p-6">
            <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
              <svelte:component this={product.icon} class="h-6 w-6" />
            </div>
            
            <h3 class="text-xl font-bold mb-2">{product.name}</h3>
            <p class="text-neural-600 dark:text-neural-400 mb-4">{product.description}</p>
            
            <div class="space-y-2 mb-6">
              {#each product.features as feature}
                <div class="flex items-start">
                  <Check class="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span class="text-sm">{feature}</span>
                </div>
              {/each}
            </div>
            
            <a 
              href={`/products/${product.id}`} 
              class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
            >
              Learn more
              <ArrowRight class="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- CTA Section -->
  <div class="mt-24 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white">
    <div class="container-max">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p class="text-primary-100 text-lg mb-8">
          Our team of experts is ready to help you implement the right AI solutions for your specific business needs.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="btn-white">Get in Touch</a>
          <a href="/solutions" class="btn-outline-white">View Solutions</a>
        </div>
      </div>
    </div>
  </div>
</div>
