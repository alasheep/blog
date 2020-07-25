<template>
  <div>
    <div class="wave-container">
      <div class="container grow">
        <layout-navigation />
        <header>
          <div class="welcome">
          </div>
        </header>
      </div>
      <!--
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.281 145.82">
        <path
          d="M4221-1918.177s334.258-105.245,817.4-13.84,1103.883-108.889,1103.883-108.889v145.82H4221Z"
          transform="translate(-4221 2040.906)"
          fill=var(--theme-color)
        />
      </svg>
      -->
    </div>
    <!--
    <section id="about-me">
      <div class="container">
        <g-image
          src="../assets/img/andy-avatar.png"
          class="avatar"
          alt="Dan Vega Avatar"
        />
        <h2>Hi, I'm Andy.</h2>
        <h2>Nice to meet you.!!!</h2>
      </div>
    </section>
    -->
    <section id="latest-articles">
      <div class="container">
        <h2>Latest Articles</h2>
        <div id="post-cards">
          <div
            class="post-card"
            v-for="post in $page.recentPosts.edges"
            :key="post.node.id"
          >
            <div>
              <!--
              <g-link :to="post.node.path" :aria-label="post.node.title">
                <g-image
                  :src="post.node.cover.src"
                  :alt="post.node.title"
                  loading="lazy"
                />
              </g-link>
              -->
            </div>
            <g-link :to="post.node.path" :aria-label="post.node.title">
              <h3>{{ post.node.title }}</h3>
              <p>{{ post.node.excerpt }}</p>
            </g-link>
            
          </div>
        </div>
        <div class="more-articles">
          <g-link to="/blog" aria-label="visit blog for more content"
            >Click for more articles</g-link
          >
        </div>
      </div>
    </section>
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation.vue";
import LayoutFooter from "@/components/LayoutFooter.vue";
import Convertkit from "@/components/ConvertKit";
export default {
  components: {
    LayoutNavigation,
    LayoutFooter,
    Convertkit
  },
  metaInfo() {
    return {
      meta: [
        { name: "author", content: "Andy" },
        {
          name: "description",
          content: "Learn to code with Dan Vega."
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:description",
          content: "The personal blog of Dan Vega"
        },
        { name: "twitter:title", content: "Dan Vega" },
        { name: "twitter:site", content: "@therealdanvega" },
        {
          name: "twitter:image",
          content: `${process.env.GRIDSOME_BASE_URL}/images/danvega_dev_cover.png`
        },
        { name: "twitter:creator", content: "@therealdanvega" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Dan Vega" },
        {
          property: "og:description",
          content: "Learn to code with Dan Vega."
        },
        {
          property: "og:url",
          content: "https://www.danvega.dev"
        },
        {
          property: "og:image",
          content: `${process.env.GRIDSOME_BASE_URL}/images/danvega_dev_cover.png`
        },
        {
          property: "og:image:secure_url",
          content: `${process.env.GRIDSOME_BASE_URL}/images/danvega_dev_cover.png`
        }
      ]
    };
  }
};
</script>

<page-query>
query Posts {
  recentPosts: allPost(perPage: 6) {
    edges {
      node {
        id
        title
        excerpt
        cover (width: 550, height: 286, quality: 90)
        path
        date(format: "MMMM DD, YYYY")
        timeToRead
      }
    }
  }
}
</page-query>

<style scoped>
#app {
  margin: 0;
  padding: 0;
}
header {
  display: flex;
  align-items: flex-start;
}
header h1 {
  font-weight: 400;
  font-style: normal;
  margin-top: 20px;
}
h1 span {
  color: #3273db;
  display: block;
  font-size: 1.8rem;
  text-transform: none;
  margin-top: -10px;
  font-family: "Handlee", cursive;
}
.wave-container {
  position: relative;
  background: var(--home-header-background);
  color: #4a4a4a;
  overflow: hidden;
}
.wave-container > svg {
  display: block;
}
.welcome p {
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 2.2rem;
}
.banner img {
  margin-top: 20px;
}
section {
  margin: 0;
  padding: 0 0 20px 0;
}
h2 {
  margin: 0;
}
.avatar {
  max-width: 200px;
  float: right;
  margin-left: 40px;
}
section p {
  font-weight: 300;
  font-size: 1.4rem;
  color: white;
  line-height: 1.7;
  margin-block-start: 1em;
  margin-block-end: 1em;
}
/* About Me */
#about-me {
  background-color: var(--theme-color);
}
#about-me h2 {
  color: var(--bright-blue);
}
#about-me a:link,
#about-me a:visited {
  text-decoration: none;
  color: white;
  padding: 6px;
  font-size: 1.1rem;
  border-bottom: 1px dashed white;
}
#about-me a:hover {
  background: none;
  border-bottom: 1px solid white;
  color: white;
}
#about-me container {
  border: 1px solid;
  border-radius: 4px;
  box-shadow: none;
  border-color: #364782;
}
#posts {
  margin: 0;
  padding: 0;
}
#posts > li {
  list-style-type: none;
  margin-bottom: 1.2rem;
}
/* Latest Articles */
#latest-articles h2 {
  margin-top: 20px;
}
#post-cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0px;
}
.post-card {
  display: flex;
  flex-direction: column;
}
.post-card img {
  max-width: 100%;
  /* height: 265px; */
  object-fit: cover;
  border-radius: 0.25rem;
}
.post-card h3 {
  margin-bottom: 0;
}
.post-card p {
  color: var(--home-postcard-font-color);
  font-size: 1.1rem;
}
.post-card:hover {
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
}
.more-articles {
  margin-top: 1.3rem;
  text-align: center;
}
.more-articles a {
  display: inline-block;
  border: 2px solid var(--link-color);
  color: var(--link-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: normal;
  text-decoration: none;
}
.more-articles a:hover {
  background: var(--link-color-hover);
  color: var(--font-color-inverse);
  text-decoration: none;
  transform: translateY(3px);
}
/* Featured Course */
#featured-course h2 {
  margin-top: 20px;
}
#featured-course {
  background-color: var(--home-featured-background);
}
#featured-course h3 {
  font-size: 1.3rem;
  text-align: center;
  margin: 0;
}
.featured-course-wrapper {
  display: flex;
}
.featured-course-wrapper p {
  color: var(--home-featured-font-color);
  font-size: 1.1rem;
  margin-top: 0px;
  padding-left: 10px;
}
.learn-more {
  text-align: right;
}
.learn-more a:link {
  text-decoration: none;
}
.learn-more a:hover {
  text-decoration: underline;
}
/* Latest Videos */
#latest-videos {
  margin-top: 20px;
  margin-bottom: 40px;
}
#latest-videos h2 {
  margin: 20px 0;
}
#latest-videos p {
  font-size: 1.1rem;
  margin-top: 0px;
  margin-bottom: 40px;
  line-height: 2.1rem;
  color: var(--home-youtube-font-color);
}
.youtube-setup {
  margin: 0 auto;
  max-width: 600px;
}
.youtube-setup img {
  max-width: 100%;
}
/* media queries */
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }
  .welcome {
    text-align: center;
  }
  .banner img {
    margin-top: 10px;
    width: 100%;
  }
  #about-me > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #post-cards {
    grid-template-columns: 1fr;
  }
  #featured-course h3 {
    margin-bottom: 10px;
  }
  .featured-course-wrapper {
    flex-direction: column;
  }
  .featured-course-wrapper img {
    width: 100%;
  }
}
</style>