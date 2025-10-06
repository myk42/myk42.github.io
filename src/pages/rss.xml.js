import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "MYK BLOG",
    description: "A blog about cybersecurity, digital privacy, and technology.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: post.slug
    })),
    customData: `<language>en-us</language>`
  });
}
