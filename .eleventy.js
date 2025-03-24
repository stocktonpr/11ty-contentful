require('dotenv').config();
const contentful = require('contentful');
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

// Initialize Contentful client
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = function(eleventyConfig) {
  // Copy assets to _site
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add date filter
  eleventyConfig.addFilter("date", function(date) {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(date));
  });

  // Add Contentful collection
  eleventyConfig.addCollection('posts', async function() {
    try {
      const entries = await client.getEntries({
        content_type: 'post',
        order: '-sys.createdAt'
      });
      
      // Debug log to see content structure
      console.log('Contentful entry:', JSON.stringify(entries.items[0], null, 2));
      
      return entries.items.map(entry => ({
        data: {
          title: entry.fields.title,
          content: documentToHtmlString(entry.fields.content),
          date: entry.sys.createdAt,
          author: entry.fields.author
        }
      }));
    } catch (error) {
      console.error('Error fetching posts from Contentful:', error);
      return [];
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
