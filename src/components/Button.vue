<template>
	<button class="btn">
		{{ content }}
	</button>
</template>

<script>
	export default {
		props: {
			content: String
		}
	}
</script>

<style scoped lang="scss">
	.btn {
		padding: 16px 48px;
		background: linear-gradient(279.56deg, #65b3e4 15.15%, rgba(120, 161, 187, 0) 171.55%);
		border-radius: 50px;
		border: none;
		appearance: none;
		font-size: 24px;
		color: #fff;
		text-transform: uppercase;
		font-weight: 700;
		cursor: pointer;
		transition: 0.2s;
		outline: none;
		&:hover {
			box-shadow: 0px 0px 20px rgba(120, 161, 187, 0.5);
		}
		&.close {
			padding: 16px 23px;
		}
		@media screen and (max-width: 678px) {
			font-size: 16px;
			padding: 16px 14px;
			&.close {
				padding: 16px 21px;
			}
		}
	}
</style>
