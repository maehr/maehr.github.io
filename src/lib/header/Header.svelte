<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import BurgerMenu from 'svelte-burger-menu';
</script>

<header>
	<div class="corner"></div>
	<BurgerMenu paddingTop={'6rem'} padding={'3rem'} backgroundColor={'#fff'} width={'20rem'} burgerColor={'#000'}> 
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
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}


	/* a:hover {
		color: var(--accent-color);
	} */
</style>
