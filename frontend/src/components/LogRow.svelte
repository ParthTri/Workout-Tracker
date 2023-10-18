<script lang="ts">
 import { TableBodyCell, TableBodyRow } from 'flowbite-svelte';
 export let log;

 const stripTime = (input: string) => {
     return input.split(" ")[0];
 }
</script>

<TableBodyRow class="h-4">
    <TableBodyCell>{stripTime(log.date)}</TableBodyCell>
    <TableBodyCell>{log.sets}</TableBodyCell>
    <TableBodyCell>{log.reps}</TableBodyCell>
</TableBodyRow>
