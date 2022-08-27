<template>
  <div
    class="doc-container"
    ref="mainContainer"
    v-if="data"
    v-loading="loading"
  >
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
import fetchData from "@/minxins/fetchData";
import { getDocuments } from "@/api/document";
export default {
  mixins: [fetchData([])],
  data() {
    return {
      containerWidth: 0,
    };
  },
};
</script>

<style>
.doc-container {
  width: 100%;
  height: 100%;
  background: #fff;
  /* display: flex; */
}
.doc-container::after {
  display: block;
  content: "";
  clear: both;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  float: left;
  width: 320px;
  margin-top: 20px;
}
</style>