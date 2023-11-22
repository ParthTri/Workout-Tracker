<script lang="ts">
	import { stripTime } from "$lib/formatting.ts"
	import Add from "$components/Add.svelte"
	import RoutineCard from '$components/formCards/RoutineCard.svelte';
	import EditableCard from '$components/EditableCard.svelte';
	import ContentWrapper from "$components/ContentWrapper.svelte";

	import { updateRoutine } from "$lib/api/update"
	import { deleteRoutine } from "$lib/api/delete"

	import type { RoutineData } from "$lib/interfaces.ts"

	export let data;
	data = data.items;

	let show: boolean = false;
	const toggleShow = () => show = !show;

	const addData = (log: RoutineData) => {
		data.push(log);
		data = data;
	} 

	const updateState = (id: string, payload?: any) => {
		if (typeof payload != undefined) {
			data.map((item: any, index: number) => {
				if (item.id == id) {
					let routine = data.splice(index, 1)[0]
					if (payload.Name != undefined) {
						routine.Name = payload.Name;
					} else if (payload.Active != undefined) {
						routine.Active = payload.Active;
					}

					data.push(routine);
				}
			})
		} else {
			data.filter(item => item.id != id);
		}

		data = data;
	}

	const updateData = (id: string) => {
		const update = (payload: any) => {
			updateState(id, payload);
			updateRoutine(id, payload)
		}

		return update;
	}

	const deleteData = (id: string) => {
		const del = () => {
			updateState(id)
			// deleteRoutine(id)
		}

		return del;
	}

</script>

<svelte:head>
	<title>Routines</title>
</svelte:head>

<ContentWrapper>
	{#each data as routine} 
		{#if routine.Active}
			<EditableCard 
				href={`/routines/${routine.id}`} 
				title={routine.Name} 
				updateData={updateData(routine.id)} 
				deleteData={deleteData(routine.id)}>
				<svelte:fragment slot="other">
					<h5>{stripTime(routine.updated)}</h5>
				</svelte:fragment>
			</EditableCard>
		{/if}
	{/each}

	<Add {toggleShow}/>

	{#if show}
		<RoutineCard {toggleShow} updateState={addData}/>
	{/if}
</ContentWrapper>
