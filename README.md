# vue-echarts-container

一个包装 ECharts 的简单 Vue 2 组件，可自适应元素容器大小。

## Props

### size

type: Object

default: `{ width: "auto", height: "300px" }`

设置表格大小。默认 `height` 为 `300px`。

### option

type: Object

default: `null`

设置图表实例的配置项以及数据，作为第一个参数传入 ECharts 的 setOption()。

参见：<https://echarts.apache.org/zh/api.html#echartsInstance.setOption>
