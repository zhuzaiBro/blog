<template>
  <div class="appContainer">
    <!-- 数据表格 -->
    <el-table stripe :data="data" style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="180" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column label="中图预览" align="center">
        <template slot-scope="scope">
          <el-image
            style="height: 100px"
            :src="scope.row.mid"
            fit="fill"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="大图预览" align="center">
        <template slot-scope="scope"
          ><el-image
            style="height: 100px"
            :src="scope.row.big"
            fit="fill"
          ></el-image
        ></template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope"
          ><el-tooltip
            class="item"
            effect="dark"
            content="编辑"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              size="mini"
              @click="editBannerHandle(scope.row)"
            >
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改对话框 -->
    <el-dialog title="请编辑信息" :visible.sync="dialogFormVisible" top="5vh">
      <el-form :model="form">
        <!-- 编辑首页标语 -->
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <!-- 编辑首页描述 -->
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <!-- 中图 -->
            <el-form-item label="首页中图">
              <Upload v-model="form.midImg" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <!-- 大图 -->
            <el-form-item label="首页大图">
              <Upload v-model="form.bigImg" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editBannerConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { getBanner, setBanner } from "@/api/banner.js";
import { sever_URL } from "@/urlConfig.js";
import Upload from "../../components/Upload.vue";
export default {
  components: { Upload },
  data() {
    return {
      data: [], // 存储数据
      dialogFormVisible: false, // 编辑对话框是否显示
      form: {
        id: "",
        mid: "",
        big: "",
        title: "",
        description: "",
      },
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      getBanner().then((res) => {
        console.log(res);
        this.data = res.data.map((it) => ({
          ...it,
          mid: sever_URL + it.midImg,
          big: sever_URL + it.bigImg,
        }));
        // for (const item of this.data) {
        //   item.big = "http://localhost:7001" + item.midImg;
        //   item.mid = "http://localhost:7001" + item.bigImg;
        // }
      });
    },
    editBannerHandle(banenrInfo) {
      // 1.将bannerInfo的数据给form
      this.form = { ...banenrInfo };
      // 2.打开dialogue
      this.dialogFormVisible = true;
    },
    editBannerConfirm() {
      // 从表单里面拿到用户修改的数据，然后发送给服务器
      // 因为api 文档要求三个首页标语都发过去
      let arr = [...this.data];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == this.form.id) {
          arr[i] = this.form;
        }
      }
      setBanner(arr).then((res) => {
        this.dialogFormVisible = false; // 关闭掉对话框
        this.$message({
          message: "编辑成功",
          type: "success",
        });
        this.fetchData();
      });
    },
  },
};
</script>

<style>
</style>