<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Mail, MapPin, Phone, Send, CheckCircle, ArrowRight } from 'lucide-svelte';
  
  $: metadata = {
    title: 'Contact Us - Neural Nexus Studios',
    description: 'Get in touch with our team to discuss how we can help transform your business with AI solutions.'
  };

  let name = '';
  let email = '';
  let company = '';
  let message = '';
  let subject = 'General Inquiry';
  let isSubmitting = false;
  let isSuccess = false;
  let error = '';

  const subjects = [
    'General Inquiry',
    'Sales',
    'Support',
    'Partnership',
    'Career Opportunities'
  ];

  async function handleSubmit() {
    if (!name || !email || !message) {
      error = 'Please fill in all required fields';
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      error = 'Please enter a valid email address';
      return;
    }

    isSubmitting = true;
    error = '';

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      name = '';
      email = '';
      company = '';
      message = '';
      subject = 'General Inquiry';
      
      isSuccess = true;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        isSuccess = false;
      }, 5000);
      
    } catch (err) {
      error = 'An error occurred. Please try again later.';
      console.error('Form submission error:', err);
    } finally {
      isSubmitting = false;
    }
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

<div class="py-16 md:py-24">
  <div class="container-max">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p class="text-xl text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
        Have questions or ready to start your AI journey? We'd love to hear from you.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white dark:bg-neural-800 rounded-2xl p-8 shadow-sm">
        <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
        
        {#if isSuccess}
          <div 
            class="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-start"
            in:fade
          >
            <CheckCircle class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p class="font-medium">Message Sent Successfully!</p>
              <p class="text-sm mt-1">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          </div>
        {/if}
        
        {#if error}
          <div 
            class="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg flex items-start"
            in:fade
          >
            <svg class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        {/if}
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                bind:value={name}
                class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-700 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                bind:value={email}
                class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-700 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="you@company.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label for="company" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              bind:value={company}
              class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-700 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Your company name (optional)"
            />
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">
              Subject
            </label>
            <select
              id="subject"
              bind:value={subject}
              class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-700 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors appearance-none"
            >
              {#each subjects as item}
                <option value={item}>{item}</option>
              {/each}
            </select>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-neural-700 dark:text-neural-300 mb-1">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              bind:value={message}
              rows="5"
              class="w-full px-4 py-2.5 rounded-lg border border-neural-300 dark:border-neural-700 bg-white dark:bg-neural-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {#if isSubmitting}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            {:else}
              <Send class="w-5 h-5 mr-2" />
              Send Message
            {/if}
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div>
        <div class="bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl p-8 text-white mb-8">
          <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
          <p class="mb-8 text-primary-100">
            Have questions about our AI solutions or services? Reach out to our team and we'll get back to you as soon as possible.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-primary-700 p-2 rounded-lg">
                <Mail class="h-5 w-5" />
              </div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-primary-100">Email us</h3>
                <p class="text-white font-medium">contact@neuralnexus.studio</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-primary-700 p-2 rounded-lg">
                <Phone class="h-5 w-5" />
              </div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-primary-100">Call us</h3>
                <p class="text-white font-medium">+1 (555) 123-4567</p>
                <p class="text-sm text-primary-100 mt-1">Mon-Fri from 9am to 5pm</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-primary-700 p-2 rounded-lg">
                <MapPin class="h-5 w-5" />
              </div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-primary-100">Visit us</h3>
                <p class="text-white font-medium">123 AI Boulevard</p>
                <p class="text-white font-medium">San Francisco, CA 94107</p>
                <p class="text-sm text-primary-100 mt-1">By appointment only</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-neural-800 rounded-2xl p-8 shadow-sm">
          <h3 class="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
          
          <div class="space-y-4">
            <div class="border-b border-neural-100 dark:border-neural-700 pb-4">
              <h4 class="font-medium text-neural-900 dark:text-white">What industries do you serve?</h4>
              <p class="mt-1 text-sm text-neural-600 dark:text-neural-400">
                We work with businesses across various industries including healthcare, finance, retail, manufacturing, and more. Our AI solutions are customizable to meet specific industry needs.
              </p>
            </div>
            
            <div class="border-b border-neural-100 dark:border-neural-700 pb-4">
              <h4 class="font-medium text-neural-900 dark:text-white">How quickly can you start a project?</h4>
              <p class="mt-1 text-sm text-neural-600 dark:text-neural-400">
                Project start times vary based on complexity, but we typically begin most engagements within 2-4 weeks of contract signing.
              </p>
            </div>
            
            <div>
              <h4 class="font-medium text-neural-900 dark:text-white">Do you offer support after implementation?</h4>
              <p class="mt-1 text-sm text-neural-600 dark:text-neural-400">
                Yes, we offer comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally.
              </p>
            </div>
          </div>
          
          <a 
            href="/faq" 
            class="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors text-sm"
          >
            View all FAQs
            <ArrowRight class="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
