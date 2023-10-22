<script>
	import { Card, Label, Input } from 'flowbite-svelte';
	import logData from "$lib/logData.ts";

	export let excerciseID = null;
	export let showWeight;

	let date;
	let reps;
	let sets;
	let weight;

</script>

<Card class="" >
	<form class="grid grid-cols-1 grid-rows-4" on:submit|preventDefault={(e) => logData(e, excerciseID)}>
		<label class="flex flex-col" for="date">
			<span class="text-sm font-medium text-slate-700">Date</span>
			<input name="date" type="date"/>
		</label>

		<label class="flex flex-col" for="sets">
			<span class="text-sm font-medium text-slate-700">Sets</span>
			<input name="sets" type="number" value="0"/>
		</label>

		<label class="flex flex-col" for="reps">
			<span class="text-sm font-medium text-slate-700">Reps</span>
			<input name="reps" type="number" value="0"/>
		</label>

		{#if showWeight}
			<label class="flex flex-col" for="Weight">
				<span class="text-sm font-medium text-slate-700">Weight</span>
				<input name="weight" type="number" value="0"/>
			</label>
		{/if}

		<button on:click>Log</button>
	</form>

</Card>

