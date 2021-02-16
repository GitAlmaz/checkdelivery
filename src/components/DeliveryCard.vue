<template>
	<div
		class="deliveryCard"
		:class="[data.available ? '' : 'disable', getCurrent === data.type ? 'checked' : '']"
		@click="selectHandler(data.type)"
	>
		<div class="fl fl-y fl-is">
			<p class="name">
				{{ data.type }}
			</p>
			<p class="note" v-if="!data.available">
				Not availible in that city
			</p>
			<p class="price">{{ data.price }}$</p>
		</div>
		<img :src="require(`@/assets/${img}`)" alt="" />
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		props: {
			data: Object,
			img: String
		},
		methods: {
			...mapMutations(['setChecked']),
			selectHandler(type) {
				this.setChecked(type)
			}
		},
		computed: {
			...mapGetters(['getCurrent'])
		}
	}
</script>

<style lang="scss" scoped>
	.deliveryCard {
		width: 523px;
		height: 224px;
		background: #ffffff;
		border: 1px solid #e9f0eb;
		box-sizing: border-box;
		border-radius: 22px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32px 40px;
		cursor: pointer;
		transition: 0.3s;
		&:not(:last-child) {
			margin-bottom: 18px;
		}
		&:hover {
			box-shadow: 0px 0px 20px rgba(120, 161, 187, 0.3);
		}
		&.disable {
			pointer-events: none;
			opacity: 0.5;
			cursor: not-allowed;
		}
		&.checked {
			position: relative;
			padding-right: 100px;
			&::after {
				content: '✓';
				background: linear-gradient(310.04deg, #65B3E4 35.65%, rgba(255, 255, 255, 0) 150.27%);
				position: absolute;
				right: 0;
				top: 0;
				width: 72px;
				height: 100%;
				color: #fff;
				border-radius: 0 22px 22px 0;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 40px;
			}
		}
		.fl-y {
			height: 100%;
			justify-content: space-between;
		}
		.name {
			font-size: 36px;
			font-weight: 700;
			color: #283044;
		}
		.note {
			font-size: 24px;
			line-height: 28px;
			color: #283044;
			opacity: 0.5;
		}
		.price {
			font-size: 50px;
			color: #78a1bb;
			font-weight: 700;
		}
		@media screen and (max-width: 678px) {
			width: 100%;
			padding: 20px;
			text-align: left;
			.name {
				font-size: 24px;
			}
			.price {
				font-size: 32px;
			}
			.note {}
			img {
				width: 84px;
				height: 84px;
			}
		}
	}
</style>
