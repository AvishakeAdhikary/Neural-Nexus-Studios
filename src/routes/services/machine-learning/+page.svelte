<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Cpu, BarChart, Code, Database, Shield, Check, ArrowRight, Zap, Users, TrendingUp } from 'lucide-svelte';
  
  $: metadata = {
    title: 'Machine Learning Solutions - Neural Nexus Studios',
    description: 'Custom machine learning solutions to extract valuable insights from your data and drive business growth.'
  };

  const features = [
    {
      title: 'Predictive Analytics',
      description: 'Leverage historical data to forecast future trends and behaviors',
      icon: BarChart
    },
    {
      title: 'Custom ML Models',
      description: 'Tailored machine learning models for your specific business needs',
      icon: Cpu
    },
    {
      title: 'Data Processing',
      description: 'Clean, process, and prepare your data for optimal ML performance',
      icon: Database
    },
    {
      title: 'Model Deployment',
      description: 'Seamless integration of ML models into your existing systems',
      icon: Code
    }
  ];

  const useCases = [
    {
      title: 'Customer Churn Prediction',
      description: 'Identify customers at risk of churning and take proactive measures',
      icon: Users
    },
    {
      title: 'Demand Forecasting',
      description: 'Accurately predict product demand to optimize inventory',
      icon: TrendingUp
    },
    {
      title: 'Anomaly Detection',
      description: 'Detect unusual patterns and potential fraud in real-time',
      icon: Shield
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized recommendations to enhance user experience',
      icon: Zap
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
  <div class="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-3xl">
        <nav class="flex mb-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="/" class="inline-flex items-center text-sm font-medium text-blue-100 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-3 h-3 text-blue-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="/services" class="text-sm font-medium text-blue-100 hover:text-white">Services</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-blue-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="text-sm font-medium text-white">Machine Learning</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Machine Learning Solutions</h1>
        <p class="text-xl text-blue-100 max-w-3xl">
          Harness the power of machine learning to transform your data into actionable insights and drive business growth.
        </p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="#solutions" class="btn-outline-white">Explore Solutions</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Overview Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-6">
            Machine Learning
          </span>
          <h2 class="text-3xl font-bold mb-6">Transform Your Business with Machine Learning</h2>
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg mb-6">
              Our machine learning solutions help businesses unlock the full potential of their data. 
              From predictive analytics to natural language processing, we build custom ML models that 
              deliver measurable results and drive business growth.
            </p>
            <p class="mb-8">
              With expertise in various ML algorithms and frameworks, we develop solutions that are 
              tailored to your specific needs and integrated seamlessly into your existing systems.
            </p>
            <div class="space-y-4">
              {#each [
                'Custom ML model development',
                'End-to-end ML pipeline implementation',
                'Continuous model monitoring and optimization',
                'Scalable ML infrastructure'
              ] as item}
                <div class="flex items-start">
                  <Check class="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="bg-neural-50 dark:bg-neural-800 rounded-2xl p-8 lg:p-12">
          <div class="bg-white dark:bg-neural-700 rounded-xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4">Request a Demo</h3>
            <p class="text-neural-600 dark:text-neural-300 mb-6">
              See how our machine learning solutions can transform your business.
            </p>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Name</label>
                <input type="text" id="name" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your name">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="your@email.com">
              </div>
              <div>
                <label for="use-case" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Use Case</label>
                <select id="use-case" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none">
                  <option>Select a use case</option>
                  <option>Predictive Analytics</option>
                  <option>Computer Vision</option>
                  <option>NLP</option>
                  <option>Recommendation Systems</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" class="w-full btn-primary">
                Request Demo
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
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
          Our Solutions
        </span>
        <h2 class="text-3xl font-bold mb-4">Machine Learning Services</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          Comprehensive machine learning solutions tailored to your business needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each features as feature}
          <div class="bg-white dark:bg-neural-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <svelte:component this={feature.icon} class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Use Cases Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Machine Learning Use Cases</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          Discover how machine learning can be applied across various business functions.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each useCases as useCase}
          <div class="group bg-neural-50 dark:bg-neural-800 rounded-xl p-6 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-white dark:group-hover:bg-blue-800/50 transition-colors duration-300">
              <svelte:component this={useCase.icon} class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{useCase.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{useCase.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of Machine Learning?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our machine learning solutions can help you achieve your business objectives.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="tel:+15551234567" class="btn-outline-white">Call Us Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
