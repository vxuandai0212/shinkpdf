<template>
  <div>
    <img v-if="!loading" @click="openDialog" style="width: 120px; height: 120px; cursor:pointer;margin-top:40px;" src="../assets/img/upload.png" />
    <loading v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { open } from '@tauri-apps/api/dialog'
import { readBinaryFile } from '@tauri-apps/api/fs'
import { basename } from '@tauri-apps/api/path'
import Loading from './Loading.vue'
import { validFilename } from '../utils/index'
@Component({
  components: { Loading }
})
export default class Upload extends Vue {
  loading = false

  async openDialog() {
    let inputFilePath: any = await open({ filters: [{ name: 'PDF File', extensions: ['pdf'] }] })
    if (inputFilePath) {
      let name = await basename(inputFilePath)
      if (!validFilename(name)) {
        return this.$message('Đường dẫn tệp phải viết liền không dấu')
      }
      this.loading = true
      let file = await readBinaryFile(inputFilePath)
      const size = file.length
      
      const inputFilename = inputFilePath.split('.').slice(0, -1).join('.')
      const inputFileExtension = inputFilePath.split('.').pop()

      const currentTime = new Date().getTime()
      const subfix = ''.concat('-').concat(currentTime.toString()).concat('-').concat('compressed')

      const outputFilePath = inputFilename.concat(subfix).concat('.').concat(inputFileExtension)
      this.$emit('upload', { name, size, inputFilePath, outputFilePath })
      this.loading = false
    }
  }
}
</script>
