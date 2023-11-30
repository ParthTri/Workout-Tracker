<script lang="ts">
	import { Toast } from "flowbite-svelte";
	import { CheckCircleSolid, CloseCircleSolid } from "flowbite-svelte-icons";
	export let success: boolean = true;
	export let toggleNotify: () => void;
	</script>

<div class="fixed top-0 left-2/4 translate-x-[-50%]">
{#if success}
	<Toast on:close={toggleNotify}>
		<svelte:fragment slot="icon">
			<CheckCircleSolid class="w-5 h-5 text-green-300" />
			<span class="sr-only">Check icon</span>
		</svelte:fragment>
		<slot name="sucess"/>
	</Toast>	
{:else}
	<Toast on:close={toggleNotify}>
		<svelte:fragment slot="icon">
			<CloseCircleSolid class="w-5 h-5" />
			<span class="sr-only">Error icon</span>
		</svelte:fragment>
		<slot name="fail"/>
	</Toast>	
{/if}

</div>
