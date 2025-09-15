<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { seoConfig } from '$lib/config/seo.js';
	
	// Props for custom SEO data
	export let title = '';
	export let description = '';
	export let keywords = '';
	export let ogImage = '';
	export let ogType = 'website';
	export let article = null;
	export let noindex = false;
	
	// Reactive statements for SEO data
	$: pageUrl = browser ? $page.url.href : seoConfig.siteUrl + $page.url.pathname;
	$: finalTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
	$: finalDescription = description || seoConfig.defaultDescription;
	$: finalKeywords = keywords || seoConfig.defaultKeywords;
	$: finalOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${seoConfig.siteUrl}${ogImage}`) : `${seoConfig.siteUrl}/og-default.png`;
	
	// Generate dynamic OG image URL if no custom image provided
	$: dynamicOgImage = !ogImage ? `${seoConfig.siteUrl}/api/og?title=${encodeURIComponent(title || seoConfig.siteName)}&description=${encodeURIComponent(finalDescription)}` : finalOgImage;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{finalTitle}</title>
	<meta name="title" content={finalTitle} />
	<meta name="description" content={finalDescription} />
	<meta name="keywords" content={finalKeywords} />
	<meta name="author" content={seoConfig.author} />
	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
	<link rel="canonical" href={pageUrl} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={finalTitle} />
	<meta property="og:description" content={finalDescription} />
	<meta property="og:image" content={dynamicOgImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={seoConfig.siteName} />
	<meta property="og:locale" content="en_US" />
	
	<!-- Article specific meta tags -->
	{#if article}
		<meta property="article:author" content={article.author || seoConfig.author} />
		<meta property="article:published_time" content={article.publishedTime} />
		{#if article.modifiedTime}
			<meta property="article:modified_time" content={article.modifiedTime} />
		{/if}
		{#if article.tags}
			{#each article.tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={pageUrl} />
	<meta name="twitter:title" content={finalTitle} />
	<meta name="twitter:description" content={finalDescription} />
	<meta name="twitter:image" content={dynamicOgImage} />
	<meta name="twitter:creator" content={seoConfig.twitterHandle} />
	<meta name="twitter:site" content={seoConfig.twitterHandle} />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="format-detection" content="telephone=no" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	
	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	
	<!-- DNS Prefetch -->
	<link rel="dns-prefetch" href="https://www.google-analytics.com" />
	
	<!-- Structured Data for breadcrumbs -->
	{#if $page.url.pathname !== '/'}
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "{seoConfig.siteUrl}"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "{title || 'Page'}",
					"item": "{pageUrl}"
				}
			]
		}
		</script>
	{/if}
</svelte:head>