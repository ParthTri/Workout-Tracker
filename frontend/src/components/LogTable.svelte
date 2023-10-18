<script>
	import LogRow from '$components/LogRow.svelte'
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
		<TableHeadCell>Sets</TableHeadCell>
		<TableHeadCell>Reps</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each data.items as routine} 
			<LogRow log={routine}/>
		{/each}
	</TableBody>
</Table>
