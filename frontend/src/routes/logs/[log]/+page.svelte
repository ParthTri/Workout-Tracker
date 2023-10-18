<script>
 import LogCard from '$components/LogCard.svelte'
 export let data;
</script>

<div class="grid grid-cols-3 auto-rows-max gap-3">
    {#each data.items as routine} 
        <LogCard log={routine}/>
    {/each}
</div>
