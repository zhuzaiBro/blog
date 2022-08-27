<template>
  <div class="mobile-nav">
    <h1>猪宰</h1>
    <div @click="openSide" class="hamberger">
      <Icon :class="{ deg: open }" type="arrowDown" />
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      open: false,
    };
  },
  //   created() {
  //     this.$bus.$on("openSide");
  //   },
  //   destroyed() {
  //     this.$bus.$off("openSide");
  //   },
  methods: {
    openSide() {
      this.open = !this.open;
      this.$bus.$emit("openSide", this.open);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.mobile-nav {
  color: #f5f5f5;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #202020;
  h1 {
    font-weight: 500;
  }
  .iconfont {
    display: block;
    transition: 0.3s;
    &.deg {
      transform: rotate(90deg);
    }
  }
}
</style>