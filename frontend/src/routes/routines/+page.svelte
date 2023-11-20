<script lang="ts">
	import { stripTime } from "$lib/formatting.ts"
	import Add from "$components/Add.svelte"
	import RoutineCard from '$components/formCards/RoutineCard.svelte';
	import EditableCard from '$components/EditableCard.svelte';
	import ContentWrapper from "$components/ContentWrapper.svelte";

	import { updateRoutine } from "$lib/update.ts"

	import type { RoutineData } from "$lib/interfaces.ts"

	export let data;
	data = data.items;

	let show: boolean = false;
	const toggleShow = () => show = !show;

	const addData = (log: RoutineData) => {
		data.push(log);
		data = data;
	} 

	const updateData = (id: string) => {
		const update = (payload: any) => {
			updateRoutine(id, payload)
		}

		return update;
	}

</script>

<svelte:head>
	<title>Routines</title>
</svelte:head>

<ContentWrapper>
	{#each data as routine} 
		<EditableCard href={`/routines/${routine.id}`} title={routine.name} updateData={updateData(routine.id)}>
			<svelte:fragment slot="other">
				<h5>{stripTime(routine.updated)}</h5>
			</svelte:fragment>
		</EditableCard>
	{/each}

	<Add {toggleShow}/>

	{#if show}
		<RoutineCard {toggleShow} updateState={addData}/>
	{/if}
</ContentWrapper>
