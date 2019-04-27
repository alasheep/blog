<template>
  <Layout>
    <!-- <main class="section"> -->
      <div class="content">
        <h1 class="title is-2">40대 개발자의 끄적끄적</h1>
      <p>
        개발 및 관심사를 정리한 글입니다. 문의사항 있으시면 트위터 계정으로 연락주세요.
        <a
          href="https://twitter.com/alasheep"
        >Twitter</a>.
      </p>
    <!-- <div class="content">
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-2">Hi, I’m Soongil Kim.</h1>
          <p><h1 class="title is-2">你好, 我叫金淳吉.</p></h1>
          <p>안녕하세요. 김순길 입니다.</p>
          <p>40대 개발자로, 초심으로 돌아가기 위해 블로그 개설했습니다.</p>
          <p>Embedded SW, Mobile App(Android/iOS) 개발했었고,</p>
          <p>현재는 Backend(Spring) 을 개발하고 있습니다.</p>
          <p>한달에 1번을 글을 올리도록 노력하겠습니다.^^</p>
        </div>
        <div class="column right-side">
          <g-image src="../assets/img/andy_2.png" class="avatar" alt="Dan Vega Avatar"/>
        </div>
      </div>
    </div>
    <h2 class="title is-3">Recent Blog Posts</h2> -->
        <div id="recent-posts"><!--class="columns is-multiline is-centered" >-->
            <!-- <div class="column is-half" v-for="post in $page.recentPosts.edges" :key="post.node.id">
              <g-link :to="post.node.path" :aria-label="post.node.title">
                <g-image :src="post.node.cover.src" class="cover" :alt="post.node.title"/>
              </g-link>
            </div> -->

            <PostCard v-for="edge in $page.recentPosts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>
    <!-- </main> -->
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
