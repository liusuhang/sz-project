<script setup lang="ts">
  import LeftBar from './components/LeftBar.vue'
  import ToolBar from './components/ToolBar.vue'
  import SwitchBtn from './components/SwitchBtn.vue'
  import BrandMaterial from "./components/BrandMaterial.vue";
  import BrandDNA from "./components/BrandDNA.vue";
  import BrandElement from "./components/BrandElement.vue";
  import {ref} from "vue";
  const componentKey = ref(0)
  const componentNameList = [BrandMaterial, BrandElement, BrandDNA]
</script>

<template>
  <LeftBar :componentKey="componentKey"/>
  <ToolBar />
  <SwitchBtn v-model="componentKey"/>

  <div class="main-board">
    <h1>品牌策略</h1>
  </div>
  <component :is="componentNameList[componentKey]"></component>
</template>

<style scoped>
.main-board {
  position: absolute;
  display: flex;
  left: 170px;
  top: 70px;
}
h1 {
  color: white;
}
</style>
