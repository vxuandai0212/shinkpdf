<template>
  <div style="text-align:center;">
    <img style="height:150px;" src="../assets/img/loading-3.gif"/>
    <danger-button style="width: 50px;margin:auto;padding:12px 25px;">Hủy</danger-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DangerButton from './DangerButton.vue'
@Component({
  components: { DangerButton }
})
export default class Loading extends Vue {}
</script>
