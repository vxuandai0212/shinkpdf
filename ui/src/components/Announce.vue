<template>
  <div>
    <el-dialog
      v-if="error"
      :visible.sync="visibleDialog"
      width="30%"
      center
      title="Thất bại"
      :close-on-click-modal="false"
    >
      <el-card shadow="never" style="width: 100%; text-align: center">
        <div style="margin-bottom: 10px">Có lỗi xảy ra</div>
        <div>
          <el-button @click="visibleDialog = false">Đóng</el-button>
        </div>
      </el-card>
    </el-dialog>
    <el-dialog
      v-else
      :visible.sync="visibleDialog"
      width="30%"
      center
      title="Thành công"
      :close-on-click-modal="false"
    >
      <el-card shadow="never" style="width: 100%; text-align: center">
        <el-button type="primary" @click="showFile">Hiển thị trong thư mục</el-button>
      </el-card>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  error = false
  visibleDialog = true

  showFile() {
    this.visibleDialog = false
    const file = 'D:\\tmp\\learn\\shrink\\ui\\src\\assets\\img\\upload.png'
    window.open('file://' + file)
  }
}
</script>
<style scoped>
el-dialog.el-dialog__body {
  text-align: center !important;
}
</style>
