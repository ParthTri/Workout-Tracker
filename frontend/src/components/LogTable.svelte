<script lang="ts">
	import LogRow from "$components/LogRow.svelte"
	import TableHeading from "$components/TableHeading.svelte";
	import {
		Table,
		TableBody,
		TableHead,
		TableHeadCell,
	} from "flowbite-svelte";

	import type { LogData } from "$lib/interfaces";

	export let data: Array<LogData>;
	export let showWeight: boolean;
</script>
<Table class="w-full">
	<TableHead >
		<TableHeadCell>Date</TableHeadCell>
		<TableHeadCell><TableHeading color="red">Sets</TableHeading></TableHeadCell>
		<TableHeadCell><TableHeading color="blue">Reps</TableHeading></TableHeadCell>
		{#if showWeight}
			<TableHeadCell><TableHeading color="green">Weight</TableHeading></TableHeadCell>
		{/if}
	</TableHead>
	<TableBody>
		{#each data as routine} 
			<LogRow log={routine}/>
		{/each}
	</TableBody>
</Table>
