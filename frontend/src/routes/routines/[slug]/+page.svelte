<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import {page} from "$app/stores";

	import Add from "$components/Add.svelte"
	import ExcerciseCard from "$components/formCards/ExcerciseCard.svelte"

	import { stripTime } from "$lib/formatting.ts";
	import type { RoutineData } from '$lib/interfaces.js';

	export let data;

	let dataItems = data.items

	const addData = (log: RoutineData) => {
		dataItems.push(log);
		dataItems = dataItems;
	}

	let routineID: string;
	try {
		routineID = dataItems[0].RoutineID;
	} catch {
		routineID = $page.url.pathname.split("/").pop().substring(1)
	}

	let show = false;
	const toggleShow = () => show = !show;
</script>

<svelte:head>
	<title>{data.routineData.name}</title>
</svelte:head>

<div class="grid grid-cols-3 auto-rows-max gap-3">
	{#if dataItems.length > 0}
		{#each dataItems as routine} 
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
