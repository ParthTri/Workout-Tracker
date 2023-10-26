<script>
	import LogRow from "$components/LogRow.svelte"
	import TableHeading from "$components/TableHeading.svelte";
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
	} from "flowbite-svelte";

	export let data;
</script>
<Table class="w-full">
	<TableHead >
		<TableHeadCell>Date</TableHeadCell>
		<TableHeadCell><TableHeading color="red">Sets</TableHeading></TableHeadCell>
		<TableHeadCell><TableHeading color="blue">Reps</TableHeading></TableHeadCell>
		{#if data[0].weight != -1}
			<TableHeadCell><TableHeading color="green">Weight</TableHeading></TableHeadCell>
		{/if}
	</TableHead>
	<TableBody>
		{#each data as routine} 
			<LogRow log={routine}/>
		{/each}
	</TableBody>
</Table>
