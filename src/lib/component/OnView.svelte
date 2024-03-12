<script>
	// @ts-nocheck

	import { inview } from 'svelte-inview';
	let isInView=false;
	const options = {
		rootMargin: '-50px',
		// unobserveOnEnter: true
	};
	export let propClass = '';
	export let beforeClass = 'opacity-0 translate-y-12';
	export let afterClass = 'opacity-100 translate-y-0';
	export let delay = '2000';
	export let duration = '700';
	export let transitionTiming = 'ease-in-out';
	let classChange = beforeClass;

	$: if (isInView) {
		classChange = afterClass;
	}
</script>

<div
	class={`${propClass} + ${classChange} transition-all delay-${delay} duration-${duration} ${transitionTiming} `}
	use:inview={options}
	on:inview_enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
>
	<slot />
</div>
