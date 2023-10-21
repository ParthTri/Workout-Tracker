<script>
    import { Card } from 'flowbite-svelte';
	import { stripTime } from "$lib/formatting.ts";
 export let data;
</script>

<div class="grid grid-cols-3 auto-rows-max gap-3">
    {#each data.items as routine} 
        {#if routine.Active == true}
          <Card class="h-44 text-center" href="/logs/${routine.id}">
              <h3>{routine.Name}</h3>
              <h5>{stripTime(routine.Created)}</h5>
          </Card>
        {/if}
    {/each}
</div>
