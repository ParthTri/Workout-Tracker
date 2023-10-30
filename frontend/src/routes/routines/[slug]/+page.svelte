<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import {page} from "$app/stores";

	import Add from "$components/Add.svelte"
	import ExcerciseCard from "$components/formCards/ExcerciseCard.svelte"

	import { stripTime } from "$lib/formatting.ts";

 export let data;

	data = data.items

	const addData = (log) => {
		data.push(log);
		data = data;
	}

	let routineID: string;
	try {
		 routineID = data[0].RoutineID;
	} catch {
		routineID = $page.url.pathname.split("/").pop().substring(1)
	}

	let show = false;
	const toggleShow = () => show = !show;
</script>

<div class="grid grid-cols-3 auto-rows-max gap-3">
		{#if data.length > 0}
			{#each data as routine} 
					{#if routine.Active == true}
						<Card class="h-44 text-center" href="/logs/${routine.id}">
								<h3>{routine.Name}</h3>
								<h5>{stripTime(routine.Created)}</h5>
						</Card>
					{/if}
			{/each}
		{:else}
			<p>Nothing here</p>		
		
		{/if}

		<Add {toggleShow}/>

		{#if show}
			<ExcerciseCard {routineID} {toggleShow} updateState={addData}/>
		{/if}
</div>
