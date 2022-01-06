<template>
  <el-card class="box-card">
    <img src="../assets/img/loading-3.gif"/>
    <el-button type="danger">Hủy</el-button>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {}
</script>
