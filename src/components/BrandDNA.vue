<script setup lang="ts">
  import { ref, onMounted,  nextTick } from 'vue';
  import * as echarts from 'echarts';
  import root from './les-miserables.json'
  const chartDom = ref(null);
  let chartInstance = null;
  onMounted(async () => {
    await nextTick();
    chartInstance = echarts.init(chartDom.value);
    const option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      legend: [
        {
          data: root.categories.map(function (a) {
            return a.name
          }),
        },
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          legendHoverLink: false,
          layout: 'none',
          circular: {
            rotateLabel: true,
          },
          data: root.nodes,
          links: root.links,
          categories: root.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
            opacity: 1,
            width: 1.2,
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 10
            }
          },
        },
      ],
    }
    chartInstance.setOption(option);
  });
</script>

<template>
  <div class="component-board" >
    <h2>品牌基因</h2>
    <div ref="chartDom" style="width: 1000px; height: 800px; margin:150px 0 0 200px "></div>
  </div>
</template>

<style scoped>
a, button, input {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-focus-ring-color: rgba(0, 0, 0, 0);
}

svg {
  color: #6C6C6C;
}
</style>
