<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Zap, Cpu, RefreshCw, BarChart2, Check, ArrowRight, Clock, Settings, TrendingUp, Shield } from 'lucide-svelte';
  
  $: metadata = {
    title: 'Business Process Automation - Neural Nexus Studios',
    description: 'Streamline your operations and boost efficiency with our intelligent automation solutions.'
  };

  const features = [
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes',
      icon: RefreshCw
    },
    {
      title: 'RPA Solutions',
      description: 'Robotic Process Automation to handle rule-based tasks',
      icon: Cpu
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connect your existing tools and applications',
      icon: Settings
    },
    {
      title: 'Process Analytics',
      description: 'Gain insights into your automated workflows',
      icon: BarChart2
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual work and minimize errors',
      icon: Zap,
      color: 'text-yellow-500'
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs through automation',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      title: 'Enhanced Accuracy',
      description: 'Eliminate human error in repetitive tasks',
      icon: Check,
      color: 'text-blue-500'
    },
    {
      title: 'Improved Compliance',
      description: 'Ensure consistent adherence to business rules',
      icon: Shield,
      color: 'text-purple-500'
    }
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
  <div class="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-3xl">
        <nav class="flex mb-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="/" class="inline-flex items-center text-sm font-medium text-purple-100 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-3 h-3 text-purple-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="/services" class="text-sm font-medium text-purple-100 hover:text-white">Services</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-purple-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="text-sm font-medium text-white">Automation</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Business Process Automation</h1>
        <p class="text-xl text-purple-100 max-w-3xl">
          Transform your business operations with intelligent automation solutions that save time, reduce costs, and minimize errors.
        </p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="#solutions" class="btn-outline-white">Our Solutions</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Overview Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 mb-6">
            Automation
          </span>
          <h2 class="text-3xl font-bold mb-6">Streamline Your Business Processes</h2>
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg mb-6">
              Our automation solutions help businesses eliminate repetitive tasks, reduce operational costs, 
              and improve overall efficiency. We identify opportunities for automation across your 
              organization and implement tailored solutions that deliver immediate value.
            </p>
            <p class="mb-8">
              From simple task automation to complex workflow orchestration, our team has the expertise to 
              transform your business processes and free up your team to focus on high-value activities.
            </p>
            <div class="space-y-4">
              {#each [
                'Custom automation solutions',
                'Seamless system integration',
                'End-to-end process automation',
                'Continuous monitoring and optimization'
              ] as item}
                <div class="flex items-start">
                  <Check class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="bg-neural-50 dark:bg-neural-800 rounded-2xl p-8 lg:p-12">
          <div class="bg-white dark:bg-neural-700 rounded-xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4">Automation Assessment</h3>
            <p class="text-neural-600 dark:text-neural-300 mb-6">
              Discover how much time and money you could save with automation.
            </p>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Name</label>
                <input type="text" id="name" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="Your name">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="your@email.com">
              </div>
              <div>
                <label for="processes" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Processes to Automate</label>
                <select id="processes" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors appearance-none">
                  <option>Select a process</option>
                  <option>Data Entry</option>
                  <option>Report Generation</option>
                  <option>Customer Onboarding</option>
                  <option>Invoice Processing</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" class="w-full btn-primary">
                Get Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div id="solutions" class="py-16 md:py-24 bg-neural-50 dark:bg-neural-950/50">
    <div class="container-max">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 mb-4">
          Our Solutions
        </span>
        <h2 class="text-3xl font-bold mb-4">Automation Services</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          Comprehensive automation solutions to transform your business operations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each features as feature}
          <div class="bg-white dark:bg-neural-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
              <svelte:component this={feature.icon} class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Benefits Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Benefits of Automation</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          Discover how automation can transform your business operations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each benefits as benefit}
          <div class="group bg-neural-50 dark:bg-neural-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-white dark:bg-neural-700 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <svelte:component this={benefit.icon} class={`h-8 w-8 ${benefit.color}`} />
            </div>
            <h3 class="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{benefit.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
        <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our automation solutions can help you save time and reduce costs.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="tel:+15551234567" class="btn-outline-white">Call Us Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
