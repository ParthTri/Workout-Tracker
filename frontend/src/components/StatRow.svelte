<script lang="ts">
 import { TableBodyCell, TableBodyRow } from 'flowbite-svelte';
import { stripTime } from "$lib/formatting.ts"
import type { StatLogData } from "$lib/interfaces.ts"

 export let log: StatLogData;
</script>

<TableBodyRow class="h-4">
    <TableBodyCell>{stripTime(log.date)}</TableBodyCell>
    <TableBodyCell>{log.Measurement}</TableBodyCell>
</TableBodyRow>
