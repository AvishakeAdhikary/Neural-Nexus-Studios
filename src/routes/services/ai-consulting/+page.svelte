<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Brain, Target, BarChart, Users, Rocket, Check, ArrowRight, Calendar, Clock, User, Briefcase } from 'lucide-svelte';
  
  $: metadata = {
    title: 'AI Consulting Services - Neural Nexus Studios',
    description: 'Expert AI consulting services to help your business leverage artificial intelligence for growth and innovation.'
  };

  const features = [
    {
      title: 'Strategic AI Roadmap',
      description: 'Custom AI strategy aligned with your business goals and objectives',
      icon: Target
    },
    {
      title: 'Technology Assessment',
      description: 'Comprehensive evaluation of your current tech stack and AI readiness',
      icon: BarChart
    },
    {
      title: 'Use Case Identification',
      description: 'Pinpoint high-impact AI opportunities specific to your business',
      icon: Users
    },
    {
      title: 'Implementation Planning',
      description: 'Step-by-step plan for successful AI adoption and integration',
      icon: Rocket
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your business needs and current capabilities to understand your AI potential.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts create a tailored AI strategy with clear objectives and KPIs.'
    },
    {
      step: '03',
      title: 'Solution Design',
      description: 'We design AI solutions that align with your business processes and goals.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Our team works closely with yours to deploy and integrate the AI solutions.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'We continuously monitor and refine the AI systems for optimal performance.'
    }
  ];

  let faqs = [
    {
      question: 'How do I know if my business needs AI consulting?',
      answer: 'If you\'re considering AI but unsure where to start, need to validate AI opportunities, or want to ensure successful AI implementation, our consulting services are perfect for you.',
      isOpen: false
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across various industries including healthcare, finance, retail, manufacturing, and more. Our approach is tailored to your specific industry needs.',
      isOpen: false
    },
    {
      question: 'How long does the consulting process take?',
      answer: 'The duration varies based on your needs, but most consulting engagements range from 4-12 weeks.',
      isOpen: false
    },
    {
      question: 'What is your approach to data privacy and security?',
      answer: 'We adhere to strict data privacy standards and implement robust security measures to protect your sensitive information.',
      isOpen: false
    }
  ];

  function toggleFaq(index) {
    faqs = faqs.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    }));
  }
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
            <li>
              <div class="flex items-center">
                <svg class="w-3 h-3 text-primary-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="/services" class="text-sm font-medium text-primary-100 hover:text-white">Services</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-3 h-3 text-primary-300 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="text-sm font-medium text-white">AI Consulting</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">AI Consulting Services</h1>
        <p class="text-xl text-primary-100 max-w-3xl">
          Transform your business with our expert AI consulting services. We help you navigate the complex AI landscape and implement solutions that drive real business value.
        </p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="#how-it-works" class="btn-outline-white">Learn More</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Overview Section -->
  <div class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-6">
            Why Choose Us
          </span>
          <h2 class="text-3xl font-bold mb-6">Expert AI Consulting for Your Business</h2>
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg mb-6">
              Our AI consulting services are designed to help businesses of all sizes harness the power of artificial intelligence. 
              Whether you're just starting your AI journey or looking to scale your existing initiatives, our team of experts will 
              guide you every step of the way.
            </p>
            <p class="mb-8">
              We take a strategic approach to AI implementation, ensuring that every solution is tailored to your specific business 
              needs and delivers measurable results. Our consultants bring years of experience across various industries, providing 
              you with the insights and expertise needed to succeed in today's competitive landscape.
            </p>
            <div class="space-y-4">
              {#each [
                'Customized AI strategy development',
                'End-to-end implementation support',
                'Industry-specific expertise',
                'Measurable business outcomes'
              ] as item}
                <div class="flex items-start">
                  <Check class="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="bg-neural-50 dark:bg-neural-800 rounded-2xl p-8 lg:p-12">
          <div class="bg-white dark:bg-neural-700 rounded-xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4">Schedule a Free Consultation</h3>
            <p class="text-neural-600 dark:text-neural-300 mb-6">
              Ready to explore how AI can transform your business? Schedule a free 30-minute consultation with our AI experts.
            </p>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Name</label>
                <input type="text" id="name" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" placeholder="Your name">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" placeholder="your@email.com">
              </div>
              <div>
                <label for="company" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">Company</label>
                <input type="text" id="company" class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-600 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" placeholder="Company name">
              </div>
              <button type="submit" class="w-full btn-primary">
                Schedule Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-16 md:py-24 bg-neural-50 dark:bg-neural-950/50">
    <div class="container-max">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
          Our Approach
        </span>
        <h2 class="text-3xl font-bold mb-4">Comprehensive AI Consulting Services</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          We provide end-to-end AI consulting services tailored to your unique business needs and objectives.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each features as feature}
          <div class="bg-white dark:bg-neural-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
              <svelte:component this={feature.icon} class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
            <p class="text-neural-600 dark:text-neural-400">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Process Section -->
  <div id="how-it-works" class="py-16 md:py-24 bg-white dark:bg-neural-900">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Our AI Consulting Process</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          A structured approach to delivering successful AI solutions for your business.
        </p>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neural-200 dark:bg-neural-700 -ml-px"></div>
        
        <!-- Process steps -->
        <div class="space-y-12 lg:space-y-0">
          {#each processSteps as step, i}
            <div class="relative lg:flex items-center justify-between {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}">
              <!-- Content -->
              <div class="lg:w-5/12 mb-8 lg:mb-0 {i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:text-right'}">
                <div class="lg:hidden w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-lg font-bold mb-4">
                  {step.step}
                </div>
                <h3 class="text-xl font-semibold mb-2">{step.title}</h3>
                <p class="text-neural-600 dark:text-neural-400">{step.description}</p>
              </div>
              
              <!-- Timeline dot -->
              <div class="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-lg font-bold z-10 mx-auto">
                {step.step}
              </div>
              
              <!-- Spacer for even items -->
              <div class="hidden lg:block lg:w-5/12"></div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="py-16 md:py-24 bg-neural-50 dark:bg-neural-950/50">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
          Find answers to common questions about our AI consulting services.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          {#each faqs as faq, i}
            <div class="bg-white dark:bg-neural-800 rounded-xl overflow-hidden shadow-sm">
              <button 
                class="w-full px-6 py-4 text-left focus:outline-none"
                on:click={() => toggleFaq(i)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-${i}`}
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-medium text-neural-900 dark:text-white">{faq.question}</h3>
                  <svg 
                    class={`w-5 h-5 text-neural-500 transform transition-transform duration-200 ${faq.isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                id={`faq-${i}`}
                class={`px-6 pb-4 ${faq.isOpen ? 'block' : 'hidden'}`}
                role="region"
                aria-labelledby={`faq-${i}-heading`}
              >
                <p class="text-neural-600 dark:text-neural-400">{faq.answer}</p>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="mt-12 text-center">
          <p class="text-neural-600 dark:text-neural-400 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <a href="/contact" class="btn-primary inline-flex items-center">
            Contact Us
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-gradient-to-r from-primary-600 to-primary-500 text-white">
    <div class="container-max py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our AI experts and discover how we can help you achieve your business goals.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="btn-white">Get Started</a>
          <a href="tel:+15551234567" class="btn-outline-white">Call Us Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
