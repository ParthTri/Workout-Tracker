<script>
	import { Toast } from "flowbite-svelte";
	import { CheckCircleSolid, CloseCircleSolid } from "flowbite-svelte-icons";
	export let success = 0;
</script>

{#if success != 0}
	<div class="">
		{#if success == 1}
			<Toast color="green">
				<svelte:fragment slot="icon">
					<CheckCircleSolid class="w-5 h-5" />
					<span class="sr-only">Check icon</span>
				</svelte:fragment>
				Item moved successfully.
			</Toast>
		{:else if success == -1}
			<Toast color="red">
				<svelte:fragment slot="icon">
					<CloseCircleSolid class="w-5 h-5" />
					<span class="sr-only">Error icon</span>
				</svelte:fragment>
				Log couldn't be entered.
			</Toast>
		{/if}
	</div>
{/if}

<style>
	.notification {
	}

	.success {
		background-color: green;
	}

	.failure {
		background-color: red;
	}
</style>
