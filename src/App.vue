<template>
	<div>
		<div class="row">
			<div class="w-50">
				<ChartDoughnut />
			</div>

			<div class="w-50">
				<RaceChart />
			</div>
		</div>
	</div>
</template>

<script>
import ChartDoughnut from "@/components/ChartDoughnut";
import RaceChart from "@/components/RaceChart";

export default {
	components: {
		ChartDoughnut,
		RaceChart
	},
};
</script>

<style lang="scss">
body {
	padding: 5rem;
}

.world-map {
	position: absolute;
	width: 60%;
	height: 60%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.chart-group {
	h6 {
		position: absolute;
		bottom: 3rem;
		left: 50%;
		transform: translateX(-50%);
	}
}

.filter-group {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	.btn {
		font-size: 12px;
		margin-right: 10px;
		font-weight: 500;
		margin-bottom: 10px;
	}
}

.bar {
	display: flex;

	.title {
		position: relative;
		height: 40px;
		width: 12rem;
		text-align: end;
		padding-right: 1rem;
	}

	span {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.vm-progress__text {
		font-size: 18px !important;
		font-weight: 700;
	}
}

.vm-progress--line {
	width: 100%;
}

.vm-progress-bar__outer {
	border-top-left-radius: 0 !important;
	border-bottom-left-radius: 0 !important;
}

.vm-progress-bar__inner {
	border-radius: 0 !important;
}

.vm-progress-bar {
	padding-right: 80px !important;
	margin-right: -80px !important;
	margin-bottom: 2rem;
}

.row {
	display: flex;
}

.vm-progress__text {
	vertical-align: top !important;
	transform: translateY(10px);
}

@media screen and (max-width: 1024px) {
	.w-50 {
		flex: 0 0 100%;
		max-width: 100%;
		margin-bottom: 10rem;

		.w-75 {
			width: 100% !important
		}
	}
}
</style>