export async function GET({ url }) {
	// Use today's date for static pages so Google sees them as "verified" recently
	const currentDate = new Date().toISOString().split('T')[0];
	
	const staticPages = [
		'/', 
		'/contact', 
		'/what-we-do', 
		'/form'
	];

	// TODO: Import your actual data fetcher here when ready
	// const projects = await fetchProjects(); 

	let xml = '<?xml version="1.0" encoding="UTF-8"?>';
	xml += `<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>`;

	// Static Pages
	staticPages.forEach((page) => {
		xml += `
		<url>
			<loc>${url.origin}${page}</loc>
			<lastmod>${currentDate}</lastmod>
			<changefreq>weekly</changefreq>
			<priority>${page === '/' ? '1.0' : '0.8'}</priority>
		</url>`;
	});

	// Dynamic Pages (Example Implementation)
	// if (projects) {
	// 	projects.forEach(project => {
	// 		xml += `
	// 		<url>
	// 			<loc>${url.origin}/projects/${project.slug}</loc>
	// 			<lastmod>${new Date(project.updated_at || currentDate).toISOString().split('T')[0]}</lastmod>
	// 			<changefreq>monthly</changefreq>
	// 			<priority>0.7</priority>
	// 		</url>`;
	// 	});
	// }

	xml += '</urlset>';

	const response = new Response(xml);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}