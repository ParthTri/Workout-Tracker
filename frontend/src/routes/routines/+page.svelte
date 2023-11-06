<script lang="ts">
	import { stripTime } from "$lib/formatting.ts"
	import Add from "$components/Add.svelte"
	import RoutineCard from '$components/formCards/RoutineCard.svelte';
	import EditableCard from '$components/EditableCard.svelte';
	import ContentWrapper from "$components/ContentWrapper.svelte";

	import type { RoutineData } from "$lib/interfaces.ts"

	export let data;
	data = data.items;

	let show: boolean = false;
	const toggleShow = () => show = !show;

	const addData = (log: RoutineData) => {
		data.push(log);
		data = data;
	} </script>

<svelte:head>
	<title>Routines</title>
</svelte:head>

<ContentWrapper>
	{#each data as routine} 
		<EditableCard href={`/routines/${routine.id}`}>
			<h3>{routine.name}</h3>
			<h5>{stripTime(routine.updated)}</h5>
		</EditableCard>
		<!-- <Card class="h-44 text-center" href="/routines/${routine.id}"> -->
		<!-- </Card> -->
	{/each}

	<Add {toggleShow}/>

	{#if show}
		<RoutineCard {toggleShow} updateState={addData}/>
	{/if}
</ContentWrapper>
