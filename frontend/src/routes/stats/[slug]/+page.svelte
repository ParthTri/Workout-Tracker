<script lang="ts">
	import LineGraph from "$components/LineGraph.svelte";
	import StatTable from "$components/StatTable.svelte";

	export let data: any;
	let dataItems = data.items;

	let statId = data.stat.collectionId;
	let targetAndColour: Array<Array<string>> = [[data.stat.Unit, "blue"]]
</script>

<svelte:head>
	<title>{data.stat.Name}</title>
</svelte:head>

<div>
	<LineGraph data={dataItems} showWeight={false} excerciseID={statId} {targetAndColour}/>

	<StatTable {data} {targetAndColour}/>
</div>
