<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import './../../node_modules/charts.css/dist/charts.min.css';
	import './../../node_modules/mvp.css/mvp.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
