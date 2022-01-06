<template>
  <div id="app">
    <upload style="text-align:center;" />
    <!-- <loading/> -->
    <!-- <detail/> -->
    <!-- <compressing /> -->
    <!-- <announce /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from './components/Upload.vue'
import Loading from './components/Loading.vue'
import Detail from './components/Detail.vue'
import Compressing from './components/Compressing.vue'
import Announce from './components/Announce.vue'
@Component({
  components: {
    Upload,
    Loading,
    Detail,
    Compressing,
    Announce
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
