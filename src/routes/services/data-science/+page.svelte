<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Database, BarChart2, Cpu, Code, Check, ArrowRight, Zap, BarChart3, PieChart, Layers, Settings } from 'lucide-svelte';
  
  $: metadata = {
    title: 'Data Science Services - Neural Nexus Studios',
    description: 'Leverage the power of data science to gain valuable insights and drive data-driven decision making.'
  };

  const services = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced statistical models',
      icon: BarChart2
    },
    {
      title: 'Machine Learning',
      description: 'Build and deploy custom machine learning models for your business needs',
      icon: Cpu
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights',
      icon: PieChart
    },
    {
      title: 'Big Data Solutions',
      description: 'Process and analyze large datasets with distributed computing',
      icon: Database
    },
    {
      title: 'Natural Language Processing',
      description: 'Extract insights from unstructured text data',
      icon: Code
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems',
      icon: Settings
    }
  ];

  const caseStudies = [
    {
      title: 'Retail Sales Forecasting',
      description: 'Improved sales prediction accuracy by 35% for a retail chain',
      icon: BarChart3
    },
    {
      title: 'Customer Churn Reduction',
      description: 'Reduced customer churn by 27% through predictive modeling',
      icon: Layers
    },
    {
      title: 'Process Optimization',
      description: 'Increased operational efficiency by 42% with data-driven insights',
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
  <div class="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-3xl">
        <nav class="flex mb-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="/" class="inline-flex items-center text-sm font-medium text-indigo-100 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-3 h-3 text-indigo-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="/services" class="text-sm font-medium text-indigo-100 hover:text-white">Services</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-indigo-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="text-sm font-medium text-white">Data Science</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Data Science Services</h1>
        <p class="text-xl text-indigo-100 max-w-3xl">
          Transform your data into actionable insights and drive business growth with our comprehensive data science solutions.
        </p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="#services" class="btn-outline-white">Our Services</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Overview Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 mb-6">
            Data Science
          </span>
          <h2 class="text-3xl font-bold mb-6">Data-Driven Decision Making</h2>
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg mb-6">
              Our data science services help organizations unlock the full potential of their data. 
              We combine advanced analytics, machine learning, and domain expertise to deliver 
              actionable insights that drive business growth and innovation.
            </p>
            <p class="mb-8">
              Whether you're looking to optimize operations, understand customer behavior, or 
              develop predictive models, our team of data scientists has the skills and experience 
              to turn your data into a competitive advantage.
            </p>
            <div class="space-y-4">
              {#each [
                'Advanced statistical analysis',
                'Custom machine learning models',
                'Real-time data processing',
                'Scalable data infrastructure'
              ] as item}
                <div class="flex items-start">
                  <Check class="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="bg-neural-50 dark:bg-neural-800 rounded-2xl p-8 lg:p-12">
          <div class="bg-white dark:bg-neural-700 rounded-xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4">Data Science Consultation</h3>
            <p class="text-neural-600 dark:text-neural-300 mb-6">
              Schedule a free consultation to discuss how data science can benefit your business.
            </p>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Name</label>
                <input type="text" id="name" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors" placeholder="Your name">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors" placeholder="your@email.com">
              </div>
              <div>
                <label for="challenge" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Business Challenge</label>
                <select id="challenge" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors appearance-none">
                  <option>Select a challenge</option>
                  <option>Customer Insights</option>
                  <option>Process Optimization</option>
                  <option>Predictive Analytics</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" class="w-full btn-primary">
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services Section -->
  <div id="services" class="py-16 md:py-24 bg-neural-50 dark:bg-neural-950/50">
    <div class="container-max">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 mb-4">
          Our Services
        </span>
        <h2 class="text-3xl font-bold mb-4">Comprehensive Data Science Solutions</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          We offer end-to-end data science services tailored to your business needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each services as service}
          <div class="bg-white dark:bg-neural-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
              <svelte:component this={service.icon} class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{service.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{service.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Case Studies Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Success Stories</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          See how we've helped businesses like yours achieve remarkable results.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each caseStudies as caseStudy}
          <div class="group bg-neural-50 dark:bg-neural-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-white dark:group-hover:bg-indigo-800/50 transition-colors duration-300">
              <svelte:component this={caseStudy.icon} class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{caseStudy.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{caseStudy.description}</p>
            <button class="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors text-sm">
              Read case study
              <ArrowRight class="ml-1 h-4 w-4" />
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock the Power of Your Data?</h2>
        <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our data science solutions can help you make better business decisions.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="tel:+15551234567" class="btn-outline-white">Call Us Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
