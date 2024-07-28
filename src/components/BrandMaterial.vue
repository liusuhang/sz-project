<script setup lang="ts">
import {ref, watch} from "vue";
import {ElCheckboxGroup} from "element-plus";
const productFeatures = [
  "茶饮",
  "酒水",
  "香蕉",
  "咖啡",
  "服饰",
  "保生品",
  "日用品",
  "口红",
  "自定义"
]
const descriptionFeatures = [
  "一/二线",
  "性价比",
  "18-40岁"
]
const currentData = ref({productFeatures: [],descriptionText: '', descriptionFeatures: [], files: []})
watch(currentData.value,()=>{
  console.log(currentData.value)
})
</script>

<template>
  <div class="component-board" >
    <h2>品牌素材</h2>
    <div class="frame">
      <div class="left">
        <div class="left-up">
          <h3>产品</h3>
          <div class="check-box-list">
            <el-checkbox-group v-model="currentData.productFeatures">
              <el-checkbox size="large"  v-for="feature in productFeatures" :key="feature" :value="feature">
                {{ feature }}
              </el-checkbox>
            </el-checkbox-group>

          </div>
        </div>
        <div class="left-down">
          <h3>描述</h3>
          <el-input
              v-model="currentData.descriptionText"
              style="width: 500px"
              :rows="5"
              type="textarea"
              placeholder="点击开始输入"
          />
          <el-checkbox-group v-model="currentData.descriptionFeatures">
            <el-checkbox size="large"  v-for="feature in descriptionFeatures" :key="feature" :value="feature">
              {{ feature }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="right">
        <h3>品牌素材上传</h3>
        <p>支持pdf，Excel，HTML</p>
        <el-upload
            v-model="currentData.files"
            class="upload-demo"
            accept=".pdf, .excel, .html"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
          </div>
        </el-upload>
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
.frame {
  margin-top: 100px;
  display: flex;
  gap: 45px;
}
.left-up,.left-down,.right {
  padding: 0 45px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: #292929;
  border-radius: 35px;
}
.left-up {
  padding-top: 34px;
  padding-bottom: 24px;
  width: 527px;
  height: 219px;
  .check-box-list {
    margin-top: 40px;

  }
}
.left-down {
  padding-top: 29px;
  padding-bottom: 40px;
  margin-top: 45px;
  width: 527px;
  height: 213px;
}
.right {

  width: 669px;
  height: 564px;
  padding: 45px 45px 0 45px;

}
.upload-demo {
  width: 100%;
}
svg {
  color: #6C6C6C;
}
p {
  color: #D4D4D4;
}
.el-textarea {
  margin: 10px 0 20px;
  height: 200px;
}
</style>
