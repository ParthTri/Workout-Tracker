<script lang="ts">
	import EditableCard from '$components/EditableCard.svelte';
	import Add from '$components/Add.svelte';
	import StatCard from '$components/formCards/StatCard.svelte';

	import { stripTime } from '$lib/formatting';
	import type { StatData } from '$lib/interfaces'

	export let data;
	let dataItems = data.items;
	
	let show = false;
	let toggleShow = () => show = !show;

	const addData = (log: StatData) => {
		dataItems.push(log);
		dataItems = dataItems;
	}

console.log(dataItems)
</script>

<svelte:head>
	<title>Stats</title>
</svelte:head>

<div class="grid grid-cols-3 auto-rows-max gap-3">
	{#if dataItems.length > 0}
		{#each dataItems as stat} 
			<EditableCard innerClass="h-44 text-center" href="/stats/{stat.id}">
				<h3>{stat.Name}</h3>
				<h5>{stripTime(stat.Created)}</h5>
			</EditableCard>
		{/each}
	{:else}
		<p>Nothing here</p>		
	{/if}

	<Add {toggleShow}/>

	{#if show}
		<StatCard updateState={addData} {toggleShow}/>
	{/if}
</div>
