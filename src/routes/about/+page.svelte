<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { Brain, Users, Target, BarChart3, Award, Check } from 'lucide-svelte';
  
  $: metadata = {
    title: 'About Us - Neural Nexus Studios',
    description: 'Learn about Neural Nexus Studios, our mission, values, and the team behind our innovative AI solutions.'
  };

  const stats = [
    { value: '50+', label: 'AI Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '40+', label: 'Expert Team Members' },
    { value: '5', label: 'Years of Excellence' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push boundaries and explore new frontiers in AI and machine learning.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to achieve outstanding results.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every solution we deliver.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Our decisions are guided by data and analytics.'
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

<div class="py-16 md:py-24">
  <!-- Hero Section -->
  <div class="container-max text-center mb-20">
    <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-6">
      About Us
    </span>
    <h1 class="text-4xl md:text-6xl font-bold mb-6">Pioneering the Future of AI</h1>
    <p class="text-xl text-neural-600 dark:text-neural-400 max-w-3xl mx-auto">
      At Neural Nexus Studios, we're dedicated to transforming businesses through innovative AI solutions that drive growth and efficiency.
    </p>
  </div>

  <!-- Stats -->
  <div class="bg-neural-50 dark:bg-neural-900/50 py-16 mb-20">
    <div class="container-max">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each stats as stat}
          <div class="text-center p-6 bg-white dark:bg-neural-800 rounded-xl shadow-sm">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.value}
            </div>
            <div class="text-neural-600 dark:text-neural-400">
              {stat.label}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Our Story -->
  <div class="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
    <div>
      <h2 class="text-3xl font-bold mb-6">Our Story</h2>
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-lg mb-6">
          Founded in 2020, Neural Nexus Studios began with a simple mission: to make advanced AI accessible to businesses of all sizes. 
          What started as a small team of AI enthusiasts has grown into a leading AI solutions provider, serving clients across multiple industries.
        </p>
        <p class="mb-6">
          Our journey has been marked by innovation, collaboration, and a relentless pursuit of excellence. We've helped organizations 
          transform their operations, unlock new opportunities, and stay ahead in an increasingly competitive landscape.
        </p>
        <div class="space-y-3">
          {#each [
            'AI-Powered Solutions',
            'Industry Expertise',
            'Custom Development',
            'Ongoing Support'
          ] as item}
            <div class="flex items-start">
              <Check class="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="bg-neural-100 dark:bg-neural-800 rounded-2xl overflow-hidden aspect-video">
      <!-- Placeholder for team image -->
      <div class="w-full h-full flex items-center justify-center text-neural-400">
        <span class="text-lg">Team at Work</span>
      </div>
    </div>
  </div>

  <!-- Our Values -->
  <div class="container-max">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold mb-4">Our Core Values</h2>
      <p class="text-neural-600 dark:text-neural-400 max-w-2xl mx-auto">
        These principles guide everything we do at Neural Nexus Studios
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each values as value}
        <div 
          class="bg-white dark:bg-neural-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          in:fade
        >
          <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
            <svelte:component this={value.icon} class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-semibold mb-3">{value.title}</h3>
          <p class="text-neural-600 dark:text-neural-400">{value.description}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
