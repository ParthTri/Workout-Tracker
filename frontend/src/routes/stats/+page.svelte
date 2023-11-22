<script lang="ts">
	import EditableCard from '$components/EditableCard.svelte';
	import Add from '$components/Add.svelte';
	import StatCard from '$components/formCards/StatCard.svelte';
	import ContentWrapper from '$components/ContentWrapper.svelte';

	import { stripTime } from '$lib/formatting';
	import type { StatData } from '$lib/interfaces'
	import { updateStat } from "$lib/api/update"
	import { deleteStat } from "$lib/api/delete"

	export let data;
	let dataItems = data.items;
	
	let show = false;
	let toggleShow = () => show = !show;

	const addData = (log: StatData) => {
		dataItems.push(log);
		dataItems = dataItems;
	}

	const updateData = (id: string) => {
		const update = (payload: any) => {
			dataItems.map((item: any, index: number) => {
				if (item.id == id) {
					let stat = dataItems.splice(index, 1)[0]
					if (payload.Name != undefined) {
						stat.Name = payload.Name;
					} else if (payload.Active != undefined) {
						stat.Active = payload.Active;
					}

					dataItems.push(stat)
				}
			})

			dataItems = dataItems

			updateStat(id, payload)
		}
		
		return update;
	}

	const deleteData = (id: string) => {
		const del = () => {
			deleteStat(id)
		}

		return del;
	}

</script>

<svelte:head>
	<title>Stats</title>
</svelte:head>

<ContentWrapper>
	{#if dataItems.length > 0}
		{#each dataItems as stat} 
			{#if stat.Active}
				<EditableCard 
					href={`/stats/${stat.id}`} 
					title={stat.Name} 
					updateData={updateData(stat.id)} 
					deleteData={deleteData(stat.id)}>
					<svelte:fragment slot="other">
						<h5>Units: {stat.Unit}</h5>
						<p class="text-sm text-slate-600">{stripTime(stat.Created)}</p>
					</svelte:fragment>
				</EditableCard>
			{/if}
		{/each}
	{:else}
		<p>Nothing here</p>		
	{/if}

	<Add {toggleShow}/>

	{#if show}
		<StatCard updateState={addData} {toggleShow}/>
	{/if}
</ContentWrapper>
