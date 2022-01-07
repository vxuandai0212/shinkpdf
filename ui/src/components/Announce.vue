<template>
  <div>
    <el-dialog
      v-if="error"
      style="font-family: 'Roboto Slab'!important;"
      :visible.sync="visibleDialog"
      width="300px"
      center
      title="Có lỗi xảy ra"
      :close-on-click-modal="false"
    >
      <div style="width: 100%; text-align: center">
        <info-button style="width: 200px;margin:auto;padding: 20px 0px;" @click="visibleDialog = false">Đóng</info-button>
      </div>
    </el-dialog>
    <el-dialog
      v-else
      :visible.sync="visibleDialog"
      width="300px"
      center
      style="font-family: 'Roboto Slab'!important;"
      title="Thành công"
      :close-on-click-modal="false"
    >
      <div style="width: 100%; text-align: center">
        <primary-button style="width: 200px;margin:auto;padding: 20px 0px;" @click="showFile">Hiển thị trong thư mục</primary-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InfoButton from './InfoButton.vue'
import PrimaryButton from './PrimaryButton.vue'
@Component({
  components: { InfoButton, PrimaryButton }
})
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
<style>
el-dialog.el-dialog__body {
  text-align: center !important;
}
.el-dialog {
  border-radius: 20px!important;
}
</style>
