<template>
	<footer class="footer">
		<div class="container fl fl-x">
			<p>
				All rights reserved<br>Fast service 2021
			</p>
			<img src="@/assets/payment.png" alt="payment">
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'footer',
		props: {
			msg: String
		}
	}
</script>

<style scoped lang="scss">
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 28px 0;
		p {
			font-size: 14px;
			color: #283044;
			opacity: 0.5;
			margin-right: 230px;
		}
		img {
			object-fit: contain;
		}
		@media screen and (max-width: 1150px) {
			position: relative;
			p {
				margin-right: auto;
			}
		}
		@media screen and (max-width: 678px) {
			.container {
				flex-wrap: wrap;
			}
			p {
				width: 100%;
				text-align: left;
			}
			img {
				order: -1;
				margin-bottom: 15px;
			}
		}
	}
</style>
