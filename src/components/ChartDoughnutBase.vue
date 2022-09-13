<script>
import { Doughnut, mixins } from "vue-chartjs";
import outlabeledPie from "chartjs-plugin-piechart-outlabels";
const { reactiveProp } = mixins;

export default {
	extends: Doughnut,
	mixins: [reactiveProp],
	components: {
		outlabeledPie
	},
	props: ["chartData"],
	data() {
		return {
			type: 'outlabeledPie',
			options: {
				zoomOutPercentage: 50,
				cutoutPercentage: 90,
				plugins: {
					legend: false,
					outlabels: {
						text: '%v%',
						valuePrecision: 2,
						color: '#333',
						backgroundColor: "transparent",
						lineColor: "transparent",
						stretch: -70,
						font: {
							resizable: true,
							minSize: 12,
							maxSize: 18,
							weight: 700
						}
					}
				}
			},
		}
	},
	mounted() {
		this.renderChart(this.chartData, this.options);
	}
};
</script>