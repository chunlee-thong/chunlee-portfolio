// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Chunlee THONG | Mobile Application Developer";
export const SITE_DESCRIPTION =
  "Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

export const getMyDescription = () => {
  var experience = new Date().getFullYear() - 2019;
  return `I'm a mobile application developer specialized in Flutter with over ${experience} years of experience on both development, teaching and management. I also has an experience with Full-stack web applications alongside DevOps.`;
};
