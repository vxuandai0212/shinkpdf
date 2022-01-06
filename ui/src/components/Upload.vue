<template>
  <div>
    <img style="position: absolute; width: 192px; height: 192px" src="../assets/img/upload.png" />
    <input
      @change="onChange"
      style="opacity: 0; width: 192px; height: 192px; cursor: pointer"
      id="file-input"
      type="file"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Upload extends Vue {
  onChange(e: any) {
    const inputFilePath = e.target.value
    const inputFilename = inputFilePath.split('.').slice(0, -1).join('.')
    const inputFileExtension = inputFilePath.split('.').pop()

    const currentTime = new Date().getTime()
    const subfix = ''.concat('-').concat(currentTime.toString()).concat('-').concat('compressed')

    const outputFilename = inputFilename.concat(subfix).concat('.').concat(inputFileExtension)

    console.log(inputFilePath)
    console.log(outputFilename)
  }
}
</script>
