<script lang="ts">
	import EditableCard from '$components/EditableCard.svelte';
	import Add from '$components/Add.svelte';
	import StatCard from '$components/formCards/StatCard.svelte';
	import ContentWrapper from '$components/ContentWrapper.svelte';

	import { stripTime } from '$lib/formatting';
	import type { StatData } from '$lib/interfaces'
	import { updateStat } from "$lib/update.ts"

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
			updateStat(id, payload)
		}
		
		return update;
	}
</script>

<svelte:head>
	<title>Stats</title>
</svelte:head>

<ContentWrapper>
	{#if dataItems.length > 0}
		{#each dataItems as stat} 
			{#if stat.Active}
				<EditableCard href={`/stats/${stat.id}`} title={stat.Name} updateData={updateData(stat.id)}>
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
