<script lang="ts">
	import EditableCard from "$components/EditableCard.svelte";
	import ContentWrapper from "$components/ContentWrapper.svelte";
	import Add from "$components/Add.svelte"
	import ExcerciseCard from "$components/formCards/ExcerciseCard.svelte"


	import {page} from "$app/stores";
	import { stripTime } from "$lib/formatting.ts";
	import type { RoutineData } from '$lib/interfaces.js';
	import { updateExcercise } from "$lib/api/update"

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

	const updateData = (id: string) => {
		const update = (payload: any) => {
			updateExcercise(id, payload)
		}

		return update;
	}
</script>

<svelte:head>
	<title>{data.routineData.Name}</title>
</svelte:head>

<ContentWrapper>
	{#if dataItems.length > 0}
		{#each dataItems as routine} 
			{#if routine.Active == true}
				<EditableCard href="/logs/${routine.id}" title={routine.Name} updateData={updateData(routine.id)}>
					<svelte:fragment slot="other">
						<h5>{stripTime(routine.Created)}</h5>
					</svelte:fragment>
				</EditableCard>
			{/if}
		{/each}
	{:else}
		<p>Nothing here</p>		

	{/if}

	<Add {toggleShow}/>

	{#if show}
		<ExcerciseCard {routineID} {toggleShow} updateState={addData}/>
	{/if}
</ContentWrapper>
