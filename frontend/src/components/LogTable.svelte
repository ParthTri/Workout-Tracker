<script lang="ts">
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

	import type { LogData } from "$lib/interfaces";

	export let data: Array<LogData>;
</script>
<Table class="w-full">
	<TableHead >
		<TableHeadCell>Date</TableHeadCell>
		<TableHeadCell><TableHeading color="red">Sets</TableHeading></TableHeadCell>
		<TableHeadCell><TableHeading color="blue">Reps</TableHeading></TableHeadCell>
    <!-- BUG: if no data exists-->
		{#if data.length != 0}
			{#if data[0].weight != -1}
				<TableHeadCell><TableHeading color="green">Weight</TableHeading></TableHeadCell>
			{/if}
		{/if}
	</TableHead>
	<TableBody>
		{#each data as routine} 
			<LogRow log={routine}/>
		{/each}
	</TableBody>
</Table>
