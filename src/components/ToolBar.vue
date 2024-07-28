<script setup lang="ts">

import {FolderOpened, QuestionFilled} from "@element-plus/icons";
</script>

<template>
  <div class="tool-bar" >
    <button class="tool-bar-btn inquiry"
            >
      <el-icon size="30">
        <question-filled />
      </el-icon>
    </button>
    <button class="tool-bar-btn folder-opened"
    >
      <el-icon size="30">
        <folder-opened />
      </el-icon>
    </button>
  </div>
</template>

<style scoped>
a, button, input {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-modify: read-write-plaintext-only;
}
.tool-bar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  right: 64px;
  top: 64px;
}
.tool-bar-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.2;
  }
}
svg {
  color: white;
}
</style>
