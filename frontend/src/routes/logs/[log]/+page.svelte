<script lang="ts">
	import LogTable from "$components/LogTable.svelte"
	import LineGraph from "$components/LineGraph.svelte"
	import Add from "$components/Add.svelte"
	import LogCard from "$components/formCards/LogCard.svelte"
	import Notification from "$components/Notification.svelte"

	import type { LogData } from "$lib/interfaces.js"

	export let data;

	let dataLogs = data != undefined ? data.items : [];
	
	const addData = (log: LogData) => {
		dataLogs.push(log);
		dataLogs = dataLogs
	}

	let show = false;
	const toggleShow = () => show = !show;
	let excerciseID = data != undefined ? data.urlId : "";
	let showWeight = data.weight;
</script>

<section class="grid grid-rows-[3fr_1fr] gap-2">
	<LineGraph data={dataLogs} {showWeight} {excerciseID}/>
	<LogTable data={dataLogs} {showWeight}/>
	<Add {toggleShow}/>

	{#if show}
		<LogCard updateState={addData} {showWeight} {excerciseID} {toggleShow} />
	{/if}

	<!-- <Notification {success}>
			 <p>Hello World</p>
			 </Notification> -->
</section>

