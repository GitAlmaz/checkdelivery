<template>
	<header class="header">
    <div class="container fl fl-x">
      <div class="logo fl fl-ic">
        <img src="@/assets/logo.svg" alt="logo" />
        FastService
      </div>
    </div>
	</header>
</template>

<script>
	export default {
		props: {
			msg: String
		}
	}
</script>

<style scoped lang="scss">
	.header {
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    @media screen and (max-width: 678px) {
      background-color: #fff;
      z-index: 10;
    }
  }
  .logo {
    font-size: 24px;
    font-weight: 700;
    img {
      margin-right: 17px;
    }
  }
</style>
