<template>
  <div class="dashboard-container">
    <div class="dash-container">
      <el-image
        class="map"
        style="width: 580px; height: 420px"
        src="http://124.222.113.45/static/upload/2022-2-13-13-29-59-961-b7e5d.jpg"
        fit="fill"
      ></el-image>
      <div class="dashboard-text">
        <div class="welcome">
          <h2>欢迎进入</h2>
          <span class="flow-text">Welcome in</span>
        </div>

        <h2 class="title">智慧建党信息平台</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  // computed: {
  //   ...mapGetters(["name"]),
  // },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding-top: 100px;
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.dash-container {
  display: flex;
  .map {
    margin: 20px;
  }
}

.dashboard-text {
  // display: flex;
  .welcome {
    display: flex;
  }

  .flow-text {
    color: #ccc;
    font-size: 1em;
    display: inline-block;
    margin-top: 36px;
    margin-left: 20px;
    line-height: 60px;
  }
}
.title {
  color: rgb(56, 154, 244);
  font-size: 1.5em;
  margin: 0;
}
</style>
