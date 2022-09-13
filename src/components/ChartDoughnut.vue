<template>
	<div class="w-75">
		<h3 class="mb-5">Global Gender</h3>

		<div class="chart-group position-relative">
			<ChartDoughnutBase :chart-data="chartData" />	
	
			<img src="../assets/world_map_2.svg" class="world-map" alt="world map"/>

			<h6 class="text-center">Based on 23K<br/>global employees</h6>
		</div>

		<div class="filter-group mt-5">
			<button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'all'}"
				@click="setCategory('all')">
				<span>Overall</span>
			</button>

			<button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'peopleManager'}"
				@click="setCategory('peopleManager')">
				<span>People Managers</span>
			</button>

			<button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'engineers'}"
				@click="setCategory('engineers')">
				<span>Individual Contributors</span>
			</button>

			<button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'individualContributor'}"
				@click="setCategory('individualContributor')">
				<span>Engineers</span>
			</button>

			<button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'manufacturingAssociates'}"
				@click="setCategory('manufacturingAssociates')">
				<span>Manufacturing Associates</span>
			</button>
		</div>
	</div>
</template>
  
<script>
import ChartDoughnutBase from "@/components/ChartDoughnutBase";
import { gender } from "@/assets/mock_data/mockData.js";

export default {
	components: {
		ChartDoughnutBase
	},
	data() {
		return {
			chartData: null,
			activeGender: gender["all"],
			activeCat: "all"
		};
	},
	mounted() {
		this.fillData();
	},
	methods: {
		setCategory(cat) {
			this.activeCat = cat;
			this.activeGender = gender[cat];
			this.fillData();
		},
		fillData() {
			this.chartData = {
				labels: ["Women", "Men", "Undisclosed"],
				datasets: [
					{
						backgroundColor: ["#5e88bd", "#192555", "#6e7888"],
						hoverBackgroundColor: ["#5e88bdcc", "#192555cc", "#6e7888cc"],
						data: [this.activeGender.women, this.activeGender.men, this.activeGender.undisclosed],
						width: 200,
						hegith: 200,
						innerWidth: 500
					}
				]
			};
		}
	}
};
</script>