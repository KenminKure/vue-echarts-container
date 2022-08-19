declare module "index.vue" {
  import { DefineComponent } from "vue";
  import { EChartsOption } from "echarts";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{ option: EChartsOption }, {}, any>;
  export default component;
}
