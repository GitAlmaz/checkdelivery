<template>
	<div id="app">
		<Header />
		<transition name="slide-fade">
			<router-view />
		</transition>
		<Footer />
	</div>
</template>

<script>
	import Header from './components/Header'
	import Footer from './components/Footer'
	export default {
		name: 'app',
		components: {
			Header,
			Footer
		}
	}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	#app {
		font-family: 'Roboto', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #283044;
	}
	* {
		margin: 0;
		box-sizing: border-box;
		list-style: none;
		padding: 0;
	}
	.container {
		width: 100%;
		max-width: 1280px;
		padding: 0 15px;
		margin: 0 auto;
	}
	.fl {
		width: 100%;
		display: flex;
		&-x {
			flex-direction: row;
		}
		&-w {
			flex-wrap: wrap;
		}
		&-y {
			flex-direction: column;
		}
		&-ic {
			align-items: center;
		}
		&-is {
			align-items: flex-start;
		}
		&-cc {
			justify-content: center;
		}
	}
	.slide-fade-enter-active {
		transition: all 0.5s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter,
	.slide-fade-leave-to {
		transform: translateX(-10px);
		opacity: 0;
	}
	.col-12 {
		width: 100%;
	}
	.col-md-6 {
		flex: 1 0 0;
		padding: 0 10px;
		@media screen and (min-width: 1150px) {
			width: 50%;
		}
	}
</style>
