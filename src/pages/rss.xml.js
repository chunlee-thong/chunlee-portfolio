import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, getMyDescription } from "../config";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: getMyDescription(),
    site: import.meta.env.SITE,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
