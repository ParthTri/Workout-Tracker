<script lang="ts">
	import LineGraph from "$components/LineGraph.svelte";
	import StatTable from "$components/StatTable.svelte";
	import Add from "$components/Add.svelte";
	import StatLogCard from "$components/formCards/StatLogCard.svelte";

	import type { StatLogData } from "$lib/interfaces";

	export let data: any;
	let dataItems: Array<StatLogData> = data.items;

	let statId = data.stat.collectionId;
	let targetAndColour: Array<Array<string>> = [[data.stat.Unit, "blue"]]

	let show = false;
	const toggleShow = () => show = !show;

	const updateState = (log: StatLogData) => {
		dataItems.push(log);
		dataItems = dataItems
	}

</script>

<svelte:head>
	<title>{data.stat.Name}</title>
</svelte:head>

<div>
	<LineGraph data={dataItems} showWeight={false} excerciseID={statId} {targetAndColour}/>

	<StatTable data={dataItems} {targetAndColour}/>

	<Add {toggleShow}/>

	{#if show}
		<StatLogCard {toggleShow} {updateState}/>	
	{/if}
</div>
