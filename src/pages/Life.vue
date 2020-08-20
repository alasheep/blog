<template>
  <Layout>
    <h1 id="title">[ Life 저장소 ]</h1>
    <life-post-list :posts="$page.posts.edges" :page-info="$page.posts.pageInfo" />
  </Layout>
</template>

<page-query>
query Life ($page: Int) {
  posts: allPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        slug
        excerpt
        cover
        timeToRead
        path
        date
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import LifePostList from "@/components/LifePostList";
export default {
  components: {
    LifePostList
  }
};
</script>

<style scoped>
.popular-tags {
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
}
#title {
  color: var(--title-color)
}
</style>