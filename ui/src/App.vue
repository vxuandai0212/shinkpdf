<template>
  <div id="app">
    <upload v-if="step === STEP.UPLOAD" style="text-align:center;" @upload="onUpload" />
    <loading v-if="step === STEP.LOADING_FILE" />
    <detail v-if="step === STEP.DETAIL_FILE" :name="name" :size="size" />
    <compressing v-if="step === STEP.COMPRESSING" />
    <announce v-if="step === STEP.FINISH" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from './components/Upload.vue'
import Loading from './components/Loading.vue'
import Detail from './components/Detail.vue'
import Compressing from './components/Compressing.vue'
import Announce from './components/Announce.vue'

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

  onUpload(value) {
    this.step = STEP.LOADING_FILE
    const { name, size, inputFilePath, outputFilePath } = value
    this.name = name
    this.size = size
    this.inputFilePath = inputFilePath
    this.outputFilePath = outputFilePath
    setTimeout(() => {
      this.step = STEP.DETAIL_FILE
    }, 2000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 700px;
  margin: auto;
}
</style>
