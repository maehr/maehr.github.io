<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		Made with <a href="https://velvetyne.fr/fonts/bluu/" id="bluu">bluu</a>,
		<a href="https://rsms.me/inter/" id="inter">Inter</a>,
		<a href="https://picnicss.com/">Picnic</a>,
		<a href="https://kit.svelte.dev">🌈SvelteKit</a>, and ❤️.
	</p>
</footer>

<style>
	a#bluu {
		font-family: 'bluu';
	}
	a#inter {
		font-weight: bold;
	}
</style>
