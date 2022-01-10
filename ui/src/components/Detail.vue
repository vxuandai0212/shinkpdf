<template>
  <el-row :gutter="20">
    <div v-if="!loading">
      <el-col :span="24" style="margin-bottom: 20px">
        <card style="display: flex;align-items: center;">
          <el-col :span="12">
            <p class="heading-text">Tên tệp</p>
            <p class="content-text">{{ name }}</p>
          </el-col>
          <el-col :span="8">
            <p class="heading-text">Dung lượng</p>
            <p class="content-text" type="success">{{ sizeFilter }}</p>
          </el-col>
          <el-col :span="4">
            <info-button @click.native="openDialog" style="position:relative;padding: 10px 0px;">Thay đổi
            </info-button>
          </el-col>
        </card>
      </el-col>
      <el-col :span="24">
        <card style="display: flex;align-items: center;">
          <el-col :span="12">
            <p class="heading-text">Tỉ lệ nén</p>
            <p>
              <el-input-number @change="onChangeCompressRate" size="mini" controls-position="right" :value="compressRate" :min="10" :max="90" />
            </p>
          </el-col>
          <el-col :span="8">
            <p class="heading-text">Dung lượng sau nén (khoảng)</p>
            <p class="content-text" type="warning">{{ compressSizeFilter }}</p>
          </el-col>
          <el-col :span="4">
            <primary-button @click.native="compress" style="padding: 10px 0px;">Nén</primary-button>
          </el-col>
        </card>
      </el-col>
    </div>
    <loading v-else />
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Card from './Card.vue'
import InfoButton from './InfoButton.vue'
import PrimaryButton from './PrimaryButton.vue'
import { formatBytes } from '../utils/index'
import { open } from '@tauri-apps/api/dialog'
import { readBinaryFile } from '@tauri-apps/api/fs'
import { basename } from '@tauri-apps/api/path'
import Loading from './Loading.vue'
import { validFilename } from '../utils/index'
@Component({
  components: { Card, InfoButton, PrimaryButton, Loading }
})
export default class Detail extends Vue {
  @Prop({ default: '' }) readonly name!: string
  @Prop({ default: 0 }) readonly size!: number
  @Prop() compressRate!: number

  inputFilePath = null
  outputFilePath = null
  loading = false

  get sizeFilter() { return formatBytes(this.size) }

  get compressSizeFilter() {
    const imageQuality = parseFloat(((100 - this.compressRate) / 100).toFixed(2))
    const afterCompressSize = this.size * imageQuality
    return formatBytes(afterCompressSize)
  }

  compress() { this.$emit('compress') }

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

  onChangeCompressRate(value: any) {
    this.$emit('change-compress-rate', value)
  }
}
</script>
<style>
.heading {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #1c1d21;
}
.paragraph {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #8181a5;
}
.ml-10 {
  margin-left: 10px;
}
</style>
