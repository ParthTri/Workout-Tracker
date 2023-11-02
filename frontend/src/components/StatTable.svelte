<script lang="ts">
	import StatRow from "./StatRow.svelte";
	import TableHeading from "$components/TableHeading.svelte";
	import {
		Table,
		TableBody,
		TableHead,
		TableHeadCell,
	} from "flowbite-svelte";

	export let data: Array<any>;
	export let targetAndColour: Array<Array<string>>;
	console.log(targetAndColour[0][1])
</script>
<Table class="w-full">
	<TableHead >
		<TableHeadCell>Date</TableHeadCell>
		<TableHeadCell><TableHeading color={targetAndColour[0][1]}>{targetAndColour[0][0]}</TableHeading></TableHeadCell>
	</TableHead>
	<TableBody>
		{#each data.items as log} 
			<StatRow {log}/>
		{/each}
	</TableBody>
</Table>
