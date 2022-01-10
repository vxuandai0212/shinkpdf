<template>
  <div id="app">
    <upload
      v-if="step === STEP.UPLOAD"
      style="text-align:center;"
      @upload="onUpload"
      @loading="onLoading"
    />
    <detail
      v-if="step === STEP.DETAIL_FILE"
      :name="name"
      :size="size"
      :compress-rate="compressRate"
      @upload="onUpload"
      @compress="onCompress"
      @change-compress-rate="onChangeCompressRate"
    />
    <compressing v-if="step === STEP.COMPRESSING" />
    <announce
      v-if="step === STEP.FINISH"
      :error="isError"
      :output-file-path="outputFilePath"
      @finish="onFinish"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from './components/Upload.vue'
import Loading from './components/Loading.vue'
import Detail from './components/Detail.vue'
import Compressing from './components/Compressing.vue'
import Announce from './components/Announce.vue'
import { Command } from '@tauri-apps/api/shell'

const STEP = {
  UPLOAD: 1,
  LOADING_FILE: 2,
  DETAIL_FILE: 3,
  COMPRESSING: 4,
  FINISH: 5
}

@Component({
  components: {
    Upload,
    Loading,
    Detail,
    Compressing,
    Announce
  }
})
export default class App extends Vue {
  STEP = STEP
  step = STEP.UPLOAD

  name = ''
  size = null
  inputFilePath = ''
  outputFilePath = ''
  compressRate = 50

  isError = false

  get imageQuality() { return parseFloat(((100 - this.compressRate) / 100).toFixed(2)) }

  onUpload(value: any) {
    const { name, size, inputFilePath, outputFilePath, compressRate } = value
    this.name = name
    this.size = size
    this.inputFilePath = inputFilePath
    this.outputFilePath = outputFilePath
    if (compressRate) {
      this.compressRate = compressRate
    }
    this.step = STEP.DETAIL_FILE
  }

  async onCompress() {
    const inputFilePath = this.inputFilePath
    const outputFilePath = this.outputFilePath

    this.step = STEP.COMPRESSING
    setTimeout(async() => {
      const output = await new Command('./resources/java/bin/java.exe', ['-jar', './resources/app.jar', this.imageQuality.toString(), inputFilePath, outputFilePath]).execute()
      const { code } = output
      console.log(output)
      if (code === 2000) {
        this.isError = false
      } else {
        this.isError = true
      }
      this.step = STEP.FINISH
    }, 3000)
  }

  onChangeCompressRate(value: any) { this.compressRate = value }

  onLoading() {
    this.step = STEP.LOADING_FILE
  }

  onCancel() {
    this.step = STEP.DETAIL_FILE
  }

  onFinish() {
    this.step = STEP.DETAIL_FILE
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 700px;
  margin: auto;
}
</style>
