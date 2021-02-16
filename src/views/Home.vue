<template>
	<div class="home">
		<div class="container">
			<div class="col-12 col-md-6 fl fl-y fl-is">
				<h1>Delivery cost</h1>
				<p>Enter name of the city to count delivery cost</p>
				<InputComp
					v-model="city"
					id="search"
					placeholder="Enter name of the city"
					:extraFunc="submitHandler"
					:data="city"
					:error="getError"
				>
					<template v-slot:button>
						<Button
							:content="getDelivery.length ? '×' : 'Enter'"
							:class="getDelivery.length ? 'close' : ''"
							@click.native="buttonHandler"
						/>
					</template>
				</InputComp>
				<PopularCities />
			</div>
		</div>
		<Result />
	</div>
</template>

<script>
	// в инпут передаю дату в виде city просто так для отображения дропдауна
	import { mapActions, mapGetters, mapMutations } from 'vuex'
	import InputComp from '@/components/InputComp.vue'
	import Button from '@/components/Button.vue'
	import PopularCities from '@/components/PopularCities.vue'
	import Result from '@/components/Result.vue'
	export default {
		name: 'Home',
		components: {
			InputComp,
			Button,
			PopularCities,
			Result
		},
		data() {
			return {
				city: ''
			}
		},
		methods: {
			...mapActions(['fetchDelivery']),
			...mapMutations(['clearDelivery']),
			submitHandler() {
				this.fetchDelivery(this.city)
			},
			buttonHandler() {
				if (this.getDelivery.length) {
					this.clearDelivery()
					this.city = ''
				} else {
					this.submitHandler()
				}
			}
		},
		computed: {
			...mapGetters(['getDelivery', 'getError'])
		}
	}
</script>

<style scoped lang="scss">
	.home {
		min-height: 100vh;
		.container {
			padding-top: 130px;
		}
		h1 {
			font-size: 48px;
			color: #283044;
			font-weight: 700;
			margin-bottom: 15px;
		}
		p {
			font-size: 24px;
			color: #283044;
			opacity: 0.5;
		}
		@media screen and (max-width: 678px) {
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 16px;
        text-align: left;
      }
		}
	}
</style>
