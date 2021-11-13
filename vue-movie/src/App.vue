<template>
  <div id="app">
    <header-comp />
    <main>
      <router-view></router-view>
    </main>  
    <footer-comp/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderComp from "./components/header/HeaderComp.vue";
import  FooterComp  from "./components/footer/FooterComp.vue"

@Component({
  components: {
    HeaderComp,
    FooterComp,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
