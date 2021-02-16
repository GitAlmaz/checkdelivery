<template>
	<ul class="citiesList">
		<li v-for="item in data" :key="item">{{ item }}</li>
	</ul>
</template>

<script>
	export default {
		props: {
			data: Array
		}
	}
</script>

<style scoped lang="scss">
	.citiesList {
		width: 224px;
		display: flex;
		flex-direction: column;
		padding: 0 15px;
		li {
			font-size: 20px;
			padding: 24px 20px 9px 20px;
			text-align: left;
			color: transparentize(#283044, 0.5);
			cursor: pointer;
			transition: 0.2s;
			&:not(:last-child) {
				border-bottom: 1px solid #e9f0eb;
			}
			&:hover {
				background: #f4f7f4;
				color: #283044;
			}
		}
		@media screen and (max-width: 678px) {
			width: 50%;
			li {
				font-size: 14px;
				padding: 24px 10px 9px 10px;
			}
		}
	}
</style>
