import { seoConfig } from '$lib/config/seo.js';

export async function load({ url }) {
	return {
		seo: {
			url: url.href,
			siteName: seoConfig.siteName,
			siteUrl: seoConfig.siteUrl
		}
	};
}