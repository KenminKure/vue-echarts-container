<template>
  <div ref="container" class="echarts-container"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Chart",
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
      chart: null,
      resizeObserver: null,
    };
  },
  computed: {},
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

<style lang="scss" scoped></style>
