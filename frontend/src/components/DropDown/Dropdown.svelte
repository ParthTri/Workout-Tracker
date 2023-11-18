<script lang="ts">
	import { DotsHorizontalOutline } from "flowbite-svelte-icons";
	export let updateDropDown: (val: boolean) => void;

	let visible = false;
	const handleClick = () => {
		visible = !visible;
		updateDropDown(visible);
		console.log(visible)
	}
</script>

<div>
	<button on:click={() => handleClick()}>
		<DotsHorizontalOutline />	
	</button>

	{#if visible}
		<ul class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 p-2">
			<slot></slot>
		</ul>		
	{/if}
</div>
