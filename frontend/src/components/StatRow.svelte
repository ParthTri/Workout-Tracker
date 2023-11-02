<script lang="ts">
 import { TableBodyCell, TableBodyRow } from 'flowbite-svelte';
import { stripTime } from "$lib/formatting.ts"
 export let log;

</script>

<TableBodyRow class="h-4">
    <TableBodyCell>{stripTime(log.date)}</TableBodyCell>
    <TableBodyCell>{log.Measurement}</TableBodyCell>
</TableBodyRow>
