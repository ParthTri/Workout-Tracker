<script lang="ts">
	import { Card } from "flowbite-svelte";
	import { CloseSolid } from "flowbite-svelte-icons";

	export let toggleShow: () => void;
</script>

<Card class="min-h-fit absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-96 drop-shadow-xl py-4">
	<button class="absolute right-[15px] top-[12px]" on:click={() => toggleShow()}>
		<CloseSolid />
	</button>
	<slot></slot>
</Card>
