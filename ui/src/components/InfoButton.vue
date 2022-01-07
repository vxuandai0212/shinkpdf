<template>
  <div style="background: #F1F1F5;border-radius: 10px;font-family: 'Roboto Slab';font-style: normal;font-weight: 600;font-size: 14px;line-height: 18px;text-align: center;color: #696974; cursor:pointer;">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class InfoButton extends Vue {}
</script>
<style scoped>
div:hover {
  background: #d5d5dc!important;
}
</style>