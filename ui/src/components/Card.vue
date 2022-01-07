<template>
  <div style="background: #ffffff; border: 1px solid #f1f1f5; border-radius: 10px; overflow:hidden; padding: 10px 5px;"><slot /></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {}
</script>
<style>
.heading-text {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #92929D;
}
.content-text {
  font-family: 'Roboto Slab';
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.1px;
  color: #44444F;
}
</style>
