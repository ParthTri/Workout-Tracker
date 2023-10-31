<script lang="ts">
	import { PlusSolid } from "flowbite-svelte-icons";
	export let toggleShow: () => void;
</script>

<div
	class="absolute bottom-[60px] right-[12px] w-12 h-12 border-2 border-black rounded-full p-2 hover:cursor-pointer bg-white"
	on:click={toggleShow}
>

	<PlusSolid class="h-full w-full"/>
</div>
