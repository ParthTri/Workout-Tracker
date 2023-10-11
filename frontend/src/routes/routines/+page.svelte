<script>
    import { Card } from 'flowbite-svelte';
    export let data;
</script>

<svelte:head>
    <title>Routines</title>
</svelte:head>


<div>
    {#each data.items as routine} 
        <Card href="/logs/">
            <h3>{routine.name}</h3>
            <h5>{routine.created}</h5>
        </Card>
    {/each}
</div>
