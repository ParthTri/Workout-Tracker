<script>
	import LogTable from "$components/LogTable.svelte"
	import LineGraph from "$components/LineGraph.svelte"
	import Add from "$components/Add.svelte"
	import AddCard from "$components/AddCard.svelte"

	export let data;

	let show = true;
	const toggleShow = () => show = !show;
	let excerciseID = data.items[0].ExcerciseID;
</script>


<section class="grid grid-rows-[2fr_1fr]">
	<LineGraph data={data.items}/>
	<LogTable data={data}/>
	<Add {toggleShow}/>

	{#if show}
		<AddCard {excerciseID}/>
	{/if}

</section>

