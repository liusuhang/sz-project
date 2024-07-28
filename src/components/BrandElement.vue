<script setup lang="ts">
  import {ref, watch} from 'vue';
  const currentData = ref({brandName: '', color: '', font: ''})
  const nameList = [
    {language: '中文', brandName: '耐克'},
    {language: '英文', brandName: 'nike'},
    {language: '日语', brandName: 'メンバーになって'},
    {language: '韩语', brandName: '나이키'}
  ]
  const colorList = ['#B98556', '#EAD39F', '#EAD39F', '#131232', '#EBACBA']
  const fontList = ['Inter','黑源字体']
  watch(currentData.value,()=>{
    console.log(currentData.value)
  })
  const selectOption = (value: string, type: string) => {
    currentData.value[type as keyof typeof currentData.value] = value
  }
</script>

<template>
  <div class="component-board" >
    <h2>品牌元素</h2>
    <div class="three-bar">
      <div class="name-bar">
        <h3>品牌名称</h3>
        <div class="scroll-bar">
          <div class="button-list name-btn">
            <button class="choose-btn diy-btn">
              <span class="up">自定义</span>
              <input type="text" v-model="currentData.brandName" placeholder="在此填入名称" class="down" style="background: transparent"/>
            </button>
            <button class="choose-btn" v-for="item in nameList" :key="item.brandName" @click="selectOption(item.brandName,'brandName')">
              <span class="up">{{ item.language }}</span>
              <span class="down">{{ item.brandName }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="color-bar">
        <h3>品牌颜色</h3>
        <div class="scroll-bar">
          <div class="button-list color-btn">
            <button class="choose-btn diy-btn" :style="{'background': currentData.color}">
              <span class="up">{{ currentData.color }}</span>
              <input v-model="currentData.color" type="color" class="down" />
            </button>
            <button class="choose-btn" v-for="item in colorList" :key="item" :style="{'background': item}" @click="selectOption(item,'color')">
              <span class="up">{{ item }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="font-bar">
        <h3>品牌字体</h3>
        <div class="scroll-bar">
          <div class="button-list font-btn">
            <button class="choose-btn diy-btn">
              <span class="up">自定义</span>
              <input v-model="currentData.font" placeholder="在此填入字体" class="down" />
            </button>
            <button class="choose-btn" v-for="item in fontList" :key="item" @click="selectOption(item,'font')">
              <span class="up">{{ item }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a, button, input {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-focus-ring-color: rgba(0, 0, 0, 0);
}
.component-board {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.three-bar {
  display: flex;
  width: 1400px;
  height: 850px;
  justify-content: space-between;

}
.name-bar,.font-bar,.color-bar,.button-list {
  display: flex;
  flex-direction: column;
  width: 400px;
}
.button-list {
  width: 100%;
  gap: 35px;
}
.scroll-bar {
  margin-top: 75px;
  padding-right: 40px;
  overflow-y: scroll;
}
.scroll-bar::-webkit-scrollbar {
  width: 2px;
  background: transparent;
}
.scroll-bar::-webkit-scrollbar-thumb {
  width: 2px;
  max-height: 50px;
  background: white;
}
.choose-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 286px;
  height: 155px;
  border-radius: 27px;
  background: #373737;
  .up {
    font-size: 28px;
    color: white;
    margin: 36px 0 10px 0;
  }
  .down {
    font-size: 20px;
    color: #868686;
  }
}
.diy-btn {
  background: #1E1E1E;
}
svg {
  color: #6C6C6C;
}
h3 {
  margin-right: 100px;
}
input {
  background: transparent;
  border: 0;
  outline: none;
  text-align: center;
}
</style>
