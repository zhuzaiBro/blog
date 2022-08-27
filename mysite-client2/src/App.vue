<template>
  <div class="app-container">
    <Layout :isPC="isPC">
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template v-if="!isPC" #top>
        <MobileNav />
      </template>

      <template #default>
        <RouterView :isPC="isPC" />
      </template>
    </Layout>
    <ToTop />
    <!-- <AsyncComponent /> -->
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
import MobileNav from "./components/mobileNav";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
    MobileNav,
    // AsyncComponent,
  },

  computed: {
    isPC: () => window.innerWidth >= 996,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
