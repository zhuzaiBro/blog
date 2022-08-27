<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory v-show="isPC" />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
  props: {
    isPC: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
