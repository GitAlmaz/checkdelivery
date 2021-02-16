<template>
	<div class="popualarCities">
		<p>Most popular cities</p>
		<div class="fl">
			<CitiesList :data="data1" />
			<CitiesList :data="data2" />
		</div>
	</div>
</template>

<script>
	import CitiesList from '@/components/CitiesList.vue'
	const data1 = ['Nur - Sultan', 'Almaty', 'Shymkent', 'Atyrau', 'Aktau']
	const data2 = ['Zhana Turmis', 'Karaganda', 'Kentau', 'Aitei', 'Pavlodar']

	export default {
		components: {
			CitiesList
		},
		data() {
			return {
				data1,
				data2
			}
		}
	}
</script>

<style lang="scss" scoped>
.popualarCities {
	p {
		font-size: 24px;
		color: #283044;
		margin-bottom: 20px;
		text-align: left;
	}
	@media screen and (max-width: 678px) {
		width: 100%;
		p {
			font-size: 16px;
		}
	}
}
</style>
