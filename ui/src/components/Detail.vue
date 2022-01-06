<template>
  <el-row :gutter="20">
    <el-col :span="24" style="margin-bottom:20px;">
      <el-col :span="10">
        <span class="heading">Tên tệp</span>
        <el-tag class="ml-10">ABC.pdf</el-tag>
      </el-col>
      <el-col :span="10">
        <span class="heading">Dung lượng</span>
        <el-tag class="ml-10" type="success">50MB</el-tag>
      </el-col>
      <el-col :span="4">
        <el-button>Thay đổi</el-button>
      </el-col>
    </el-col>
     <el-col :span="24">
      <el-col :span="10">
        <span class="heading">Tỉ lệ nén</span>
        <el-select class="ml-10" v-model="compressRate" placeholder="Chọn mức độ nén">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <span class="heading">Dung lượng sau nén (khoảng)</span>
        <el-tag class="ml-10" type="warning">25MB</el-tag>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">Nén</el-button>
      </el-col>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  get options() {
    let ops = []
    for (let i = 1; i < 100; i++) {
      ops.push({ label: `${i}%`, value: i })
    }
    return ops
  }

  compressRate = 50
}
</script>
<style>
.heading {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #1C1D21;
}
.paragraph {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #8181A5;
}
.ml-10 {
  margin-left: 10px;
}
</style>