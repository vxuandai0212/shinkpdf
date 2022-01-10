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
      @close="onCloseError"
    >
      <div style="width: 100%; text-align: center">
        <info-button style="width: 200px;margin:auto;padding: 20px 0px;" @click.native="visibleDialog = false">Đóng</info-button>
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
      @close="onCloseSuccess"
    >
      <div style="width: 100%; text-align: center">
        <primary-button style="width: 200px;margin:auto;padding: 20px 0px;" @click.native="showFile">Hiển thị trong thư mục</primary-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import InfoButton from './InfoButton.vue'
import PrimaryButton from './PrimaryButton.vue'
import { Command } from '@tauri-apps/api/shell'
@Component({
  components: { InfoButton, PrimaryButton }
})
export default class Loading extends Vue {
  @Prop() error!: boolean
  @Prop() outputFilePath!: string

  visibleDialog = true

  async showFile() {
    this.visibleDialog = false
    const cmd = `/select,${this.outputFilePath}`
    const output = await new Command('explorer', cmd).execute()
  }

  onCloseError() { this.$emit('finish') }

  onCloseSuccess() { this.$emit('finish') }
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
