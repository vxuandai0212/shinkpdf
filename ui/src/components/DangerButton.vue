<template>
  <div style="background: #FC5A5A;border-radius: 10px;font-family: 'Roboto Slab';font-style: normal;font-weight: 600;font-size: 14px;line-height: 18px;text-align: center;color: #FFFFFF; cursor:pointer;">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class InfoButton extends Vue {}
</script>
