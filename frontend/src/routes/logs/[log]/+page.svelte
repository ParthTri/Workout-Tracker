<script>
	import LogTable from "$components/LogTable.svelte"
	import LineGraph from "$components/LineGraph.svelte"
	export let data;
</script>


<section class="grid grid-rows-[2fr_1fr]">
	<LineGraph />
	<LogTable data={data}/>
</section>
