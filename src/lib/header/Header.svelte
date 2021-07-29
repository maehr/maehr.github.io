<script lang="ts">
	import logo from './svelte-logo.svg';
	import BurgerMenu from 'svelte-burger-menu';
</script>

<header>
	<div class="corner" />
	<BurgerMenu
		paddingTop={'6rem'}
		padding={'3rem'}
		backgroundColor={'#fff'}
		width={'20rem'}
		burgerColor={'#333'}
	>
		<!-- https://npm.io/package/svelte-burger-menu -->
		<h2><a sveltekit:prefetch href="/">Home</a></h2>
		<h2><a sveltekit:prefetch href="/about">About</a></h2>
		<h2><a sveltekit:prefetch href="/todos">Todos</a></h2>
	</BurgerMenu>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
</header>

<style>
</style>
