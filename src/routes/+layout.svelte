<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Navbar from '../lib/component/navbar.svelte';

	let isView = false;

	let changeBg = 'bg-black text-white';
	onMount(() => {
		changeBg = 'bg-gray-100 text-black';
		setTimeout(() => {
			changeBg = 'opacity-0';
		}, 1000);
		setTimeout(() => {
			changeBg = 'hidden h-0 w-0';
		}, 2000);
		setTimeout(() => {
			isView = true;
		}, 1000);
	});
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<div
	class={`${changeBg} fixed inset-0 transition-all ease-in-out duration-700 w-full min-h-screen z-50`}
>
	<div
		class="flex justify-center items-center text-4xl h-full tracking-widest font-[Judson] font-medium"
	>
		<span class=" opacity-80">STMAY</span>
		<span class=" opacity-40">ART</span>
	</div>
</div>
{#if isView}
	<Navbar />
	<slot />
{/if}
