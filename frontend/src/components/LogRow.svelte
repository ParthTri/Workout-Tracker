<script lang="ts">
 import { TableBodyCell, TableBodyRow } from 'flowbite-svelte';
import { stripTime } from "$lib/formatting.ts"
 export let log;

</script>

<TableBodyRow class="h-4">
    <TableBodyCell>{stripTime(log.date)}</TableBodyCell>
    <TableBodyCell>{log.sets}</TableBodyCell>
    <TableBodyCell>{log.reps}</TableBodyCell>
		{#if log.weight != -1}
			<TableBodyCell>{log.weight}</TableBodyCell>
		{/if}
</TableBodyRow>
