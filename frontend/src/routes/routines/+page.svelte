<script>
    import { Card } from 'flowbite-svelte';
    export let data;
</script>

<svelte:head>
    <title>Routines</title>
</svelte:head>


<div class="grid grid-cols-3 auto-rows-max gap-3">
    {#each data.items as routine} 
        <Card class="h-44 text-center" href="/routines/${routine.id}">
            <h3>{routine.name}</h3>
            <h5>{routine.created}</h5>
        </Card>
    {/each}
</div>
