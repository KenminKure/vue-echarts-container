<template>
  <div ref="container" class="echarts-container"></div>
</template>

<script lang="ts">
import * as echarts from "echarts";

export default {
  name: "EchartsContainer",
  props: {
    option: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      chart: null as echarts.ECharts | null,
      resizeObserver: null as ResizeObserver | null,
    };
  },
  computed: {},
  watch: {
    option: {
      handler(newValue) {
        if (this.chart) {
          this.chart.clear();
          this.resizeObserver?.disconnect();
          this.handleMountedNextTick();
        }
      },
      deep: true,
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.handleMountedNextTick();
    });
  },
  beforeDestroy() {
    this.resizeObserver?.disconnect();
  },
  methods: {
    handleMountedNextTick() {
      const container = this.$refs.container;
      const chart = echarts.init(container as HTMLElement);
      this.chart = chart;
      const resizeObserver = new ResizeObserver((entries) => {
        chart.resize();
      });
      this.resizeObserver = resizeObserver;
      resizeObserver.observe(container as HTMLElement);
      if (this.option) chart.setOption(this.option);
    },
  },
};
</script>

<style lang="scss" scoped></style>
