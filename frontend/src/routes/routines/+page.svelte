<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { stripTime } from "$lib/formatting.ts"
	import Add from "$components/Add.svelte"
	import RoutineCard from '$components/formCards/RoutineCard.svelte';
	import EditableCard from '$components/EditableCard.svelte';

	import type { RoutineData } from "$lib/interfaces.ts"

	export let data;
	data = data.items;

	let show: boolean = false;
	const toggleShow = () => show = !show;

	const addData = (log: RoutineData) => {
		data.push(log);
		data = data;
	}
</script>

<svelte:head>
	<title>Routines</title>
</svelte:head>

<div class="h-full grid grid-cols-3 auto-rows-max gap-3">
	{#each data as routine} 
		<EditableCard innerClass="h-44 text-center" href={`/routines/${routine.id}`}>
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
</div>
