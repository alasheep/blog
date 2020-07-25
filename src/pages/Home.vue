<template>
  <Layout>
      <div class="content">
        <h1 class="title is-2">개발자의 끄적끄적</h1>
      <p>
        개발 및 관심사를 적는곳입니다.
        <a
          href="https://twitter.com/alasheep"
        >Twitter</a>.
      </p>
        <div id="recent-posts">
            <PostCard v-for="edge in $page.recentPosts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost(perPage: 6) {
    edges {
      node {
        id
        title
        cover(width:800)
        path
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {

  components: {
    PostCard
  },
  metaInfo: {
    title: "Welcome to my website",
    meta: [
      { name: "author", content: "Dan Vega" },
      {
        name: "description",
        content: "This is the personal blog of Dan Vega."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "The personal blog of Dan Vega" },
      { name: "twitter:title", content: "Dan Vega" },
      { name: "twitter:site", content: "@therealdanvega" },
      {
        name: "twitter:image",
        content: `${process.env.GRIDSOME_BASE_URL}/images/danvega_dev_cover.png`
      },
      { name: "twitter:creator", content: "@therealdanvega" }
    ]
  }
};
</script>

<style>
.avatar {
  max-width: 200px;
  text-align: center;
  margin: 30px auto;
}
.right-side {
  text-align: center;
}
#recent-posts .column {
  text-align:center !important;
}
#recent-posts h2 a:link,
#recent-posts h2 a:visited {
  color: #2e2e2e;
}
img.cover {
  border-radius: 4px;
}
</style>


    