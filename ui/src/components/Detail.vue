<template>
  <el-row :gutter="20">
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
          <info-button style="padding: 10px 0px;">Thay đổi</info-button>
        </el-col>
      </card>
    </el-col>
    <el-col :span="24">
      <card style="display: flex;align-items: center;">
        <el-col :span="12">
          <p class="heading-text">Tỉ lệ nén</p>
          <p>
            <el-input-number size="mini" controls-position="right" v-model="compressRate" :min="10" :max="90" />
          </p>
        </el-col>
        <el-col :span="8">
          <p class="heading-text">Dung lượng sau nén (khoảng)</p>
          <p class="content-text" type="warning">{{ compressSizeFilter }}</p>
        </el-col>
        <el-col :span="4">
          <primary-button @click="compress" style="padding: 10px 0px;">Nén</primary-button>
        </el-col>
      </card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Card from './Card.vue'
import InfoButton from './InfoButton.vue'
import PrimaryButton from './PrimaryButton.vue'
import { formatBytes } from '../utils/index'
@Component({
  components: { Card, InfoButton, PrimaryButton }
})
export default class Loading extends Vue {
  @Prop() readonly name: string
  @Prop() readonly size: number

  compressRate = 50

  get sizeFilter() { return formatBytes(this.size) }

  get compressSizeFilter() {
    const imageQuality = parseFloat(((100 - this.compressRate) / 100).toFixed(2))
    const afterCompressSize = this.size * imageQuality
    return formatBytes(afterCompressSize)
  }

  compress() { this.$emit('compress') }
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
