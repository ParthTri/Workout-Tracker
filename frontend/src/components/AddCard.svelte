<script>
	import { Card } from 'flowbite-svelte';
	import logData, { extractData } from "$lib/logData.ts";
	import { stripTime } from "$lib/formatting.ts";

	export let excerciseID = null;
	export let showWeight;
	export let updateState;

	let date = new Date().toISOString().split("T")[0];
	export let success;
	
	const handleSubmission = (e) => {
		let log = extractData(e)
		logData(log, excerciseID)
					 .then(res => {
						 if (res.code == 200) {
							 /* success(1) */
							updateState(log)
						 }
						 /* else {
								success(-1)
								} */
					 })
	}

</script>

<Card class="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-96 drop-shadow-2xl">
	<form class="grid grid-cols-1 grid-rows-auto gap-4"
		on:submit|preventDefault={(e) => handleSubmission(e)}>
		<label class="flex flex-col" for="date">
			<span class="text-sm font-medium text-slate-700">Date</span>
			<input name="date" type="date" value={date}/>
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

		<button class="w-full bg-sky-950 rounded-full h-[2.5rem] text-white font-bold
			hover:bg-transparent hover:border-2 hover:border-sky-950 hover:text-sky-950 duration-100 ease-in">
			Log
		</button>
	</form>
</Card>

