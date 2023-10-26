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
	let showWeight = dataLogs.length != 0 ? dataLogs[0].weight != -1 : false;

</script>


<section class="grid grid-rows-[2fr_1fr]">
	<LineGraph data={dataLogs} {showWeight} {excerciseID}/>
	<LogTable data={dataLogs}/>
	<Add {toggleShow}/>

	{#if show}
		<LogCard updateState={addData} {showWeight} {excerciseID} {toggleShow} />
	{/if}

	<!-- <Notification {success}>
			 <p>Hello World</p>
			 </Notification> -->
</section>

