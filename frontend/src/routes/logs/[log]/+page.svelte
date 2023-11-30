<script lang="ts">
	import LogTable from "$components/LogTable.svelte"
	import LineGraph from "$components/LineGraph.svelte"
	import Add from "$components/Add.svelte"
	import LogCard from "$components/formCards/LogCard.svelte"
	import Notification from "$components/Notification.svelte"

	// BUG: Linegraph doesn't render if requested from URL
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
	let showWeight = data.excerciseData.Weight;

	let targetAndColour = [["reps", "steelblue"], ["sets", "red"]]
	if (showWeight) {
		targetAndColour.push(["weight", "green"])
	}

	let notify: boolean = false;
	let notifyState: boolean = false;
	let message: string = "";
	let triggerNotification = (msg?: string, success?: boolean) => {
		notify = !notify;
		message = (msg != undefined) ? msg : "";
		notifyState = success != undefined ? success : false;
	}
</script>

<svelte:head>
	<title>{data.excerciseData.Name}</title>
</svelte:head>

<section class="grid grid-rows-[2fr_1fr] gap-2 pb-14">
	{#if notify}
		<Notification success={notifyState} toggleNotify={() => notify = false}>
			<div slot="fail">
				<h1>{message}</h1>
			</div>	
			<div slot="sucess">
				<h1>{message}</h1>
			</div>	
		</Notification>
	{/if}
	<LineGraph data={dataLogs} {showWeight} {excerciseID} {targetAndColour}/>

<!-- BUG: When data is added to table the height changes and goes off the page -->
	<LogTable data={dataLogs} {showWeight}/>
	<Add {toggleShow}/>

	{#if show}
		<LogCard updateState={addData} {showWeight} {excerciseID} {toggleShow} notify={triggerNotification}/>
	{/if}
</section>

