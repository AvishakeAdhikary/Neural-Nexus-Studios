<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { ArrowRight, Calendar, Clock, Tag } from 'lucide-svelte';
  
  $: metadata = {
    title: 'AI & Technology Insights - Neural Nexus Studios',
    description: 'Latest articles and insights on AI, machine learning, and technology trends from Neural Nexus Studios.'
  };

  const articles = [
    {
      id: 'ai-in-business',
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how AI is transforming business operations and creating new opportunities across industries.',
      date: '2025-09-10',
      readTime: '5 min read',
      tags: ['AI', 'Business', 'Innovation'],
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 'ml-trends',
      title: 'Top Machine Learning Trends in 2025',
      excerpt: 'Discover the latest trends and advancements in machine learning that are shaping the future of technology.',
      date: '2025-09-05',
      readTime: '7 min read',
      tags: ['Machine Learning', 'Trends', '2025'],
      image: '/images/blog/ml-trends.jpg'
    },
    {
      id: 'automation-strategies',
      title: 'Effective Automation Strategies for Enterprises',
      excerpt: 'Learn how enterprises are leveraging automation to improve efficiency and reduce operational costs.',
      date: '2025-08-28',
      readTime: '6 min read',
      tags: ['Automation', 'Enterprise', 'Efficiency'],
      image: '/images/blog/automation.jpg'
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
  <div class="container-max">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">AI & Technology Insights</h1>
      <p class="text-xl text-neural-600 dark:text-neural-400 max-w-3xl mx-auto">
        Explore the latest articles, tutorials, and insights on AI, machine learning, and emerging technologies.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each articles as article (article.id)}
        <article 
          transition:fade={{ duration: 300 }}
          class="bg-white dark:bg-neural-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-48 bg-neural-100 dark:bg-neural-700 relative">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex flex-wrap gap-2 mb-2">
                {#each article.tags as tag}
                  <span class="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-700 dark:text-primary-300 rounded-full">
                    {tag}
                  </span>
                {/each}
              </div>
              <h2 class="text-xl font-bold text-white">
                <a href={`/blog/${article.id}`} class="hover:underline">
                  {article.title}
                </a>
              </h2>
            </div>
          </div>
          <div class="p-6">
            <p class="text-neural-600 dark:text-neural-400 mb-4">{article.excerpt}</p>
            <div class="flex items-center justify-between text-sm text-neural-500">
              <div class="flex items-center space-x-2">
                <Calendar class="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Clock class="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-16 text-center">
      <button class="btn-primary group">
        Load More Articles
        <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
</div>
