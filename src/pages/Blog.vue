<template>
  <Layout>
    <h1>Recent Articles</h1>
    <blog-post-list :posts="$page.posts.edges" :page-info="$page.posts.pageInfo" />
  </Layout>
</template>

<page-query>
query Blog ($page: Int) {
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
import BlogPostList from "@/components/BlogPostList";
export default {
  components: {
    BlogPostList
  }
};
</script>

<style scoped>
.popular-tags {
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
}
</style>