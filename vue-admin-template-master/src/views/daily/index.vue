<template>
  <div class="app-container">
    <el-calendar :range="['2019-03-04', '2019-03-04']"> </el-calendar>
  </div>
</template>

<script>
import { getProject } from "@/api/project";
import { sever_URL } from "@/urlConfig";
export default {
  data() {
    return {};
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getProject().then(({ data }) => {
        this.listLoading = false;
        this.data = data;
        console.log(data);
        for (let i of this.data) {
          i.thumb2 = sever_URL + i.thumb;
          this.srcList.push(i.thumb2);
        }
      });
    },
    confirmEditProjectHandle() {},
    deleteProjectHandle(projectInfo) {
      this.$confirm("确定要删除此项目吗? ", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delProject(projectInfo.id).then(() => {
            this.fetchData();
            this.$message({
              type: "success",
              message: "删除成功",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    openGitHubHandle() {},
    editProjectHandle() {},
  },
};
</script>

<style>
</style>