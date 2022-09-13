import Vue from "vue";
import App from "./App.vue";
// import Chart from'chart.js';
import Progress from 'vue-multiple-progress'

Vue.component('VmProgress', Progress)

Vue.config.productionTip = false;

// Chart.pluginService.register({
//   beforeRender: function(chart) {
//    if (chart.config.options.showAllTooltips) {
//     chart.pluginTooltips = [];
//     chart.config.data.datasets.forEach(function(dataset, i) {
//      chart.getDatasetMeta(i).data.forEach(function(sector) {
//       chart.pluginTooltips.push(new Chart.Tooltip({
//        _chart: chart.chart,
//        _chartInstance: chart,
//        _data: chart.data,
//        _options: chart.options.tooltips,
//        _active: [sector]
//       }, chart));
//      });
//     }); // turn off normal tooltips 
//     chart.options.tooltips.enabled = false;
//    }
//   },
//   afterDraw: function(chart, easing) {
//    if (chart.config.options.showAllTooltips) { // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once 
//     if (!chart.allTooltipsOnce) {
//      if (easing !== 1) return;
//      chart.allTooltipsOnce = true;
//     }
//     chart.options.tooltips.enabled = true;
//     Chart.helpers.each(chart.pluginTooltips, function(tooltip) {
//      tooltip.initialize();
//      tooltip.update(); // we don't actually need this since we are not animating tooltips 
//      tooltip.pivot();
//      tooltip.transition(easing).draw();
//     });
//     chart.options.tooltips.enabled = false;
//    }
//   }
//  });

new Vue({
  render: h => h(App)
}).$mount("#app");
 