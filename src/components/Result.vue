<template>
	<div class="result">
		<div class="result__list" v-if="getDelivery.length">
			<DeliveryCard
				v-for="item in getDelivery"
				:key="item.type"
				:data="item"
				:img="item.type === 'pickup' ? 'pick_up.svg' : item.type === 'courier' ? 'Courier.svg' : 'Post.svg'"
			/>
		</div>
		<img v-else class="result__emptyImage" src="@/assets/delivery-background.svg" alt="" />
	</div>
</template>

<script>
	import DeliveryCard from '@/components/DeliveryCard'
	import { mapGetters } from 'vuex'
	export default {
		components: {
			DeliveryCard
		},
		data() {
			return {}
		},
		computed: {
			...mapGetters(['getDelivery'])
		}
	}
</script>

<style lang="scss" scoped>
	.result {
		width: 50vw;
		height: 100vh;
		position: absolute;
		right: 0;
		top: 0;
		padding-top: 130px;
		background: #f7f7f7;
		border-radius: 40px 0px 0px 40px;
		overflow: hidden;
		&__list {
			padding-left: 30px;
		}
		&__emptyImage {
			width: 100%;
			min-width: 760px;
			object-fit: contain;
			position: absolute;
			bottom: 0;
			right: 0;
		}
		@media screen and (max-width: 1150px) {
			position: relative;
			width: 100%;
			height: auto;
			padding-top: 18px;
			margin-top: 18px;
			border-radius: 40px 40px 0px 0px;
			&__emptyImage {
				position: relative;
				min-width: auto;
			}
		}
		@media screen and (max-width: 678px) {
			padding-top: 0;
			&__list {
				padding: 25px 15px;
			}
		}
	}
</style>
