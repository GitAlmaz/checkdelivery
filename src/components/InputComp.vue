<template>
	<div class="input-comp">
		<div class="input-wrap" :class="[data.length ? 'active' : '', error ? 'error' : '']">
			<div class="input-wrap__head">
				<input
					type="text"
					:value="value"
					:placeholder="placeholder"
					@input="inputHandler($event.target.value)"
					@keypress.enter="extraFunc"
					ref="input"
				/>
				<slot name="button"></slot>
			</div>
			<ul v-if="data" class="input-wrap__dropdown">
				<!-- <li v-for="item in data" :key="item">Almaty</li> -->
				<li @click="selectHandler(data)">{{ data }}</li>
			</ul>
		</div>
		<p class="error" v-if="error">{{ error }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			id: String,
			placeholder: String,
			data: Array | String,
			value: String,
			extraFunc: Function,
			error: String
		},
		methods: {
			inputHandler(value) {
				this.$emit('input', value)
			},
			selectHandler(value) {
				this.$refs.input.value = value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-comp {
		margin: 80px 0;
		.error {
			color: #ff4757;
			font-size: 20px;
			margin-top: 15px;
		}
		@media screen and (max-width: 678px) {
			width: 100%;
			margin: 40px 0;
				.error {
				font-size: 14px;
			}
		}
	}
	.input-wrap {
		background: #ffffff;
		border: 1px solid #e9f0eb;
		box-sizing: border-box;
		border-radius: 30px;
		&.active {
			box-shadow: 0px 0px 20px rgba(120, 161, 187, 0.3);
			.input-wrap__head {
				&::after {
					content: '';
					box-sizing: border-box;
					width: 90%;
					height: 1px;
					background: #e9f0eb;
					position: absolute;
					bottom: 0;
					left: 18px;
				}
			}
		}
		&.error {
			border: 1px solid #ff4757;
		}
		input {
			font-size: 24px;
			padding: 16px 177px 16px 36px;
			color: #283044;
			border: none;
			border-radius: 50px;
			font-weight: 700;
			&::placeholder {
				color: #d9e4dc;
			}
			&:focus {
				appearance: none;
				outline: none;
			}
		}
		&__head {
			position: relative;
			.btn {
				z-index: 2;
				position: absolute;
				top: 0;
				right: 0;
			}
		}
		&__dropdown {
			display: flex;
			flex-direction: column;
			padding: 16px 18px;
			li {
				font-size: 20px;
				padding: 24px 20px 9px 20px;
				text-align: left;
				color: #283044;
				cursor: pointer;
				transition: 0.2s;
				&:not(:last-child) {
					border-bottom: 1px solid #e9f0eb;
				}
				&:hover {
					background: #f4f7f4;
				}
			}
		}
		@media screen and (max-width: 678px) {
			border-radius: 26px;
			input {
				width: 100%;
				font-size: 16px;
				padding-right: 82px;
			}
			&__dropdown {
				padding: 10px ​18px;
				li {
					font-size: 14px;
					padding: 16px 10px 9px 10px;
				}
			}
		}
	}
</style>
