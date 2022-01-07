<template>
  <div style="background: #50b5ff;border-radius: 10px;font-family: 'Roboto Slab';font-style: normal;font-weight: 600;font-size: 14px;line-height: 18px;text-align: center;color: #FAFAFB; cursor:pointer;">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PrimaryButton extends Vue {}
</script>
<style scoped>
div:hover {
  background: #29a6ff!important;
}
</style>