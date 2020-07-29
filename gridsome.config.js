// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Andy Blog",
  siteUrl: "https://alasheep.com",
  siteDescription: "Personal blog of Andy",
  icon: "src/img/andy-favicon.png",
  templates: {
    Post: "/blog/:year/:month/:day/:slug",
    Tag: "/tag/:title",
    Newsletter: "/newsletter/coffee-and-code/:issue",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
        resolveAbsolutePaths: true,
        remark: {
          autolinkClassName: "fas fa-hashtag",
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [
            [
              "gridsome-plugin-remark-shiki",
              {
                theme: "nord",
              },
            ],
            [
              "gridsome-plugin-remark-twitter",
              {
                omitScript: true,
              },
            ],
            ["gridsome-plugin-remark-codesandbox", {}],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "newsletter/coffee-and-code/**/*.md",
        typeName: "Newsletter",
        resolveAbsolutePaths: true,
        remark: {
          autolinkHeadings: false,
          plugins: [["gridsome-plugin-remark-twitter", {}]],
        },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Dan Vega",
          feed_url: "https://alasheep.com/rss.xml",
          site_url: "https://alasheep.com",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.excerpt,
          url: getPostURL(node.date, node.slug),
          author: node.author,
          date: node.date,
          custom_elements: [
            {
              published: node.date.toString(),
            },
          ],
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        config: {
          "/blog/*": {
            changefreq: "daily",
            priority: 0.5,
          },
          "/tag/*": {
            changefreq: "daily",
            priority: 0.7,
          },
          "/newsletter/*": {
            changefreq: "weekly",
            priority: 0.9,
          },
        },
      },
    },
  ],
};

function getPostURL(date, slug) {
  const createdOn = new Date(date);
  const year = createdOn.getFullYear();
  const month = `${
    createdOn.getMonth() + 1 < 10 ? "0" : ""
  }${createdOn.getMonth() + 1}`;
  const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`;
  return `https://alasheep.com/blog/${year}/${month}/${day}/${slug}`;
}