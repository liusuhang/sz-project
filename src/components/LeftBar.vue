<script setup lang="ts">
import {ref} from 'vue';

const bullets = [
  {key: 0},
  {key: 1},
  {key: 2}
]

defineProps({
  componentKey: Number,
})

const showLeftBar = ref(true)

const switchBarVisible=()=> {
  showLeftBar.value = !showLeftBar.value;
};

</script>

<template>
  <button class="bar-visible"
          @click="switchBarVisible">
    <el-icon :size="80" >
      <component
          class="switch-icon"
          :is="showLeftBar?'ArrowLeft':'ArrowRight'" />
    </el-icon>
  </button>
  <div class="left-bar"
       :class="{ 'fold': !showLeftBar }"
  >
    <div class="pagination-bullet-list">
      <span v-for="item in bullets"
            :key="item.key"
            :class="item.key==componentKey?'active-bullet':'inactive-bullet'"
            class="pagination-bullet"
            @click=""
      />
    </div>
  </div>
</template>

<style scoped>
.left-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 43px 35px 37px;
  position: absolute;
  left: 0;
  top: 0;
  height: 90%;
  background: #292929;
  transition: opacity 0.3s ease;
  opacity: 1;
}
.left-bar.fold {
  opacity: 0;
}
.pagination-bullet-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  .pagination-bullet {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .active-bullet {
    background: #EAD3A0;
  }
  .inactive-bullet {
    background: #494949;
  }
}
.bar-visible {
  position: absolute;
  left: -5px;
  bottom: 35px;
  background: transparent;
  border: transparent;
  z-index: 1;
}
svg {
  color: #494949;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.2;
  }
}
a, button, input {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-focus-ring-color: rgba(0, 0, 0, 0);
}
</style>
