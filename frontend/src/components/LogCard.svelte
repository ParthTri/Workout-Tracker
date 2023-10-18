<script lang="ts">
 import { Card, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
 export let log;

 const stripTime = (input: string) => {
     return input.split(" ")[0];
 }
</script>

<Card class="h-44 text-center" href="/logs/${log.id}">
    <h3>{stripTime(log.date)}</h3>
    <h5>{stripTime(log.created)}</h5>
    <TableBody>
        <TableHead>
            <TableHeadCell>Sets</TableHeadCell>
            <TableHeadCell>Reps</TableHeadCell>
        </TableHead>
        <TableBody>
            <TableBodyRow>
                <TableBodyCell>{log.sets}</TableBodyCell>
                <TableBodyCell>{log.reps}</TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </TableBody>
</Card>
