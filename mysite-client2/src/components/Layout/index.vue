<template>
  <div class="layout-container">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div
      :style="{ padding: isPC ? '0' : '3rem 0' }"
      :class="{ closed: !openSite && !isPC }"
      class="left"
    >
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openSite: false,
    };
  },
  props: {
    isPC: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    this.$bus.$on("openSide", this.handleOpen);
  },
  // destroyed() {
  //   this.$bus.$off("openSide", this.handleOpen);
  // },
  methods: {
    handleOpen(val) {
      this.openSite = val;
    },
  },
};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: transparent;
    box-shadow: 2px;
    z-index: 3;
  }

  .left {
    transition: 0.3s;
    transform-origin: left;

    background: linear-gradient(120deg, #202020, #5352ed, #008c8c);
    background-size: 800%;
    animation: change 10s infinite;
    &.closed {
      width: 0;
      transform: scaleX(0);
    }
  }
}

@keyframes change {
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 100%;
  }
  to {
    background-position-x: 0%;
  }
}
</style>
