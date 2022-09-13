<template>
  <div style="width: 300px">
    <div title="Line">
      <h1>Chart Line</h1>
      <!-- <div
        v-for="(item, index) in btn" :key="index"
        :name="item.label"
        :value="item.value"
        @change="updateChart"
      >
        {{ item.label }}
      </div> -->
    </div>
    <div img-bottom>
      <ChartLineBase :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
import ChartLineBase from "@/components/ChartLineBase";

export default {
  components: {
    ChartLineBase,
  },
  data() {
    return {
      btn: [
        { label: "Today", value: "day" },
        { label: "This Week", value: "week" },
      ],
      chartData: null,
      data: {
        day: [1, 3, 5, 3, 1, 1, 3, 5, 3, 1],
        week: [12, 14, 16, 18, 11, 13, 15],
      },
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      radio: "day",
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: this.labels[this.radio],
        datasets: [
          {
            borderColor: "#81894e",
            data: this.data[this.radio],
            label: "recent user register",
          },
        ],
      };
    },
    updateChart() {
      this.$nextTick(() => {
        this.fillData();
      });
    },
  },
};
</script>