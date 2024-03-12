<script>
	import { onMount } from 'svelte';
	import OnView from '../lib/component/OnView.svelte';

	import img200 from "../lib/paintings/200.jpg?enhanced"
	import img195 from "../lib/paintings/195.jpg?enhanced"

	import img133 from "../lib/paintings/133.jpg?enhanced"
	import img136 from "../lib/paintings/136.jpg?enhanced"
	import img141 from "../lib/paintings/141.jpg?enhanced"
	import img127 from "../lib/paintings/127.jpg?enhanced"
	import img130 from "../lib/paintings/130.jpg?enhanced"

	const paintings= [
	{
		"id": "200",
		"price": "279.0",
		"sizeName": "A5",
		"size": "14.85 x 21 cm",
    "img":img200
	},
	{
		"id": "195",
		"price": "129.0",
		"sizeName": "",
		"size": "18 x 12.5 cm",
    "img":img195
	}
]

const Others=[
  {
    "sizeName":"A5",
    "size":"14.85 x 21cm",
    "paintings":[
      {
        "id": "133",
        "price": "63.6",
        "src":img133
      },
      {
        "id": "136",
        "price": "59.5",
        "src":img136
      },
      {
        "id": "141",
        "price": "66.4",
        "src":img141
      },
      {
        "id": "127",
        "price": "66.4",
        "src":img127
      },
      {
        "id": "130",
        "price": "73.4",
        "src":img130
      }
    ]
  }
]
  onMount(() => {
    // Scroll to the top of the page when the component is mounted (on page load/reload)
    window.scrollTo(0, 0);
  });


</script>

<OnView>
	<div class="mt-24">
		<div class=" md:container md:mx-auto px-4 sm:px-8 md:px-8 lg:max-w-[800px] xl:max-w-[800px]">
			<div class="flex flex-col w-full">
				<span class="text-3xl font-bold font-sans">Price List</span>
				<span class="font-medium font-sans text-xl">Newest works available : </span>
				<span class="italic font-sans"
					>*Price does not include shipping costs from Indonesia and PayPal tax
				</span>
			</div>
		</div>
	</div>
</OnView>

{#each paintings as item}
	<OnView>
		<div class="my-12">
			<div class=" md:container md:mx-auto px-4 sm:px-8 md:px-8 lg:max-w-[800px] xl:max-w-[800px] min-h-96">
				<div class="flex flex-col w-full">
					{#if item.img}
            <enhanced:img src={item.img} alt=""/>
          {:else}
            <!-- Handle the case where item.img is undefined -->
            <p>No image available</p>
          {/if}
					<div class="flex justify-end items-center py-2">
						<span class="italic font-[Arial] text-xl"
							>Size:
							{#if item.sizeName}
								{`${item.sizeName} (${item.size})`}
							{:else}
								{item.size}
							{/if}
						</span>
					</div>
					<div class="flex justify-start items-center">
						<span class="text-xl font-normal font-[Arial]">[ {item.id} ] = {item.price} USD</span>
					</div>
				</div>
			</div>
		</div>
	</OnView>
	<hr class="border-t border-gray-300 my-4">
{/each}

<OnView>
  <div class="mt-12">
    <div class=" md:container md:mx-auto px-4 sm:px-8 md:px-8 lg:max-w-[800px] xl:max-w-[800px]">
      <div class="flex flex-col w-full">
        <span class="text-2xl font-bold font-sans">Others: </span>
        <span class=" italic font-[Arial] text-lg font-medium"> Size: A5 (14.85 x 21cm) </span>
      </div>
    </div>
  </div>
</OnView>
<div class=" md:container md:mx-auto px-4 sm:px-8 md:px-8 lg:max-w-[800px] xl:max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
	{#each Others[0].paintings as item (item.id)}
  <OnView>
		<div class="">
			<div class=" min-h-96">
				<div class="flex flex-col w-full">
					<enhanced:img src="{item.src}" alt=""/>
					<div class="flex justify-center md:justify-start items-center">
						<span class="font-medium pt-px font-[Arial]">[ {item.id} ] = {item.price} USD</span>
					</div>
				</div>
			</div>
		</div>
	</OnView>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
