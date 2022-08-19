# vue-echarts-container

一个包装 ECharts 的简单 Vue 组件，可监听容器尺寸变化执行 `echartsInstance.resize` 方法改变图标尺寸。

## Props

### option

设置图表实例的配置项以及数据，作为第一个参数传入 ECharts 的 `echartsInstance.setOption` 方法。具体可参见：<https://echarts.apache.org/zh/api.html#echartsInstance.setOption>

#### type

Object

#### default

`null`

## License

[MIT](./LICENSE)
