<script lang="ts">
	import LogTable from "$components/LogTable.svelte"
	import LineGraph from "$components/LineGraph.svelte"
	import Add from "$components/Add.svelte"
	import LogCard from "$components/formCards/LogCard.svelte"
	import Notification from "$components/Notification.svelte"

	import type { LogData } from "$lib/interfaces.js"

	export let data;
	data = data.items;
	
	const addData = (log: LogData) => {
		data.push(log);
		data = data
	}

	let show = false;
	const toggleShow = () => show = !show;

	let excerciseID = data[0].ExcerciseID;
	let showWeight = data[0].weight != -1;

</script>


<section class="grid grid-rows-[2fr_1fr]">
	<LineGraph data={data}/>
	<LogTable data={data}/>
	<Add {toggleShow}/>

	{#if show}
		<LogCard updateState={addData} {showWeight} {excerciseID} {toggleShow} />
	{/if}

	<!-- <Notification {success}>
			 <p>Hello World</p>
			 </Notification> -->
</section>

