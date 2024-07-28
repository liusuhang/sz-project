<script setup lang="ts">
import {ArrowRight} from "@element-plus/icons";
const componentKey = defineModel({type: Number, default: 0})
const switchComponent = () =>{
  componentKey.value = componentKey.value === 2 ? 0 : componentKey.value + 1
  console.log(componentKey.value)
}
</script>

<template>
  <div class="switch-btn-list" >
    <button class="switch-btn"
            @click="switchComponent">
      <el-icon size="120">
        <arrow-right />
      </el-icon>
    </button>
  </div>
</template>

<style scoped>
a, button, input {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-focus-ring-color: rgba(0, 0, 0, 0);
}
.switch-btn-list {
  position: absolute;
  right: 20px;
  top: 50%;
  z-index: 3;
}
.switch-btn {
  background: transparent;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.2;
  }
}
svg {
  color: #6C6C6C;
}
</style>
