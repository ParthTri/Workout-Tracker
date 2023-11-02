<script lang="ts">
	import LineGraph from "$components/LineGraph.svelte";

	export let data: any;
	let dataItems = data.items;

	let statId = data.stat.collectionId;
	console.log(data.stat)
	let targetAndColour: Array<Array<string>> = [[data.stat.Unit, "steelblue"]]
</script>

<svelte:head>
	<title>{data.stat.Name}</title>
</svelte:head>

<div>
	<LineGraph data={dataItems} showWeight={false} excerciseID={statId} {targetAndColour}/>
</div>
