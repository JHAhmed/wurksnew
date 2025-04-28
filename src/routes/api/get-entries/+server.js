import * as contentful from 'contentful';
import { env } from '$env/dynamic/private'; 

export async function POST({ request }) {
    const { contentType } = await request.json();
    let entries = [];

    try {
        const client = contentful.createClient({
            space: env.CONTENTFUL_SPACE_ID,
            accessToken: env.CONTENTFUL_ACCESS_TOKEN
        });

        const response = await client.getEntries({ content_type: contentType });

        entries = response.items.map((item) => ({
            title: item.fields.title,
            image: item.fields.image,
            summary: item.fields.summary,
            content: item.fields.content,
            date: item.fields.publishDate,
            slug: item.fields.slug,
            link: item.fields.link,
            technologies: item.fields.technologies,
            programs: item.fields.programs,
        }));

    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
    
    
	return new Response(JSON.stringify(entries));
}