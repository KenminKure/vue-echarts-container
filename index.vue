<script>
import * as echarts from "echarts";

export default {
  name: "Chart",
  props: {
    size: {
      type: Object,
      default() {
        return {};
      },
    },
    option: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      chart: null,
      resizeObserver: null,
    };
  },
  computed: {
    style() {
      return Object.assign({}, this.size);
    },
  },
  watch: {
    option: {
      handler(newValue) {
        this.chart.setOption(newValue);
      },
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.handleMountedNextTick();
    });
  },
  beforeDestroy() {
    this.resizeObserver.disconnect();
  },
  methods: {
    handleMountedNextTick() {
      const container = this.$refs.container;
      const chart = echarts.init(container);
      this.chart = chart;
      const resizeObserver = new ResizeObserver((entries) => {
        chart.resize();
      });
      this.resizeObserver = resizeObserver;
      resizeObserver.observe(container);
      if (this.option) chart.setOption(this.option);
    },
  },
};
</script>

<template>
  <div ref="container" class="echarts-container" :style="style"></div>
</template>

<style lang="scss" scoped>
.echarts-container {
  width: auto;
  height: 300px;
}
</style>
