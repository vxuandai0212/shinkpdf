<template>
  <div>
    <img style="position: absolute; width: 120px; height: 120px" src="../assets/img/upload.png" />
    <input
      @change="onChange"
      style="opacity: 0; width: 120px; height: 120px; cursor: pointer"
      id="file-input"
      type="file"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { formatBytes } from '../utils/index'
@Component
export default class Upload extends Vue {
  onChange(e: any) {
    const file = e.target.files[0]
    if (file) {
      const { name, size } = file
      console.log(formatBytes(size))

      const compressRate = 60
      const imageQuality = parseFloat(((100 - compressRate) / 100).toFixed(2))

      const afterCompressSize = size * imageQuality
      console.log(formatBytes(afterCompressSize))

      const inputFilePath = e.target.value
      const inputFilename = inputFilePath.split('.').slice(0, -1).join('.')
      const inputFileExtension = inputFilePath.split('.').pop()

      const currentTime = new Date().getTime()
      const subfix = ''.concat('-').concat(currentTime.toString()).concat('-').concat('compressed')

      const outputFilePath = inputFilename.concat(subfix).concat('.').concat(inputFileExtension)

      console.log(inputFilePath)
      console.log(outputFilePath)

      this.$emit('upload', { name, size, inputFilePath, outputFilePath })
    }
  }
}
</script>
