<script>
	import { Card } from 'flowbite-svelte';

	import Add from "$components/Add.svelte"
	import ExcerciseCard from "$components/formCards/ExcerciseCard.svelte"

	import { stripTime } from "$lib/formatting.ts";

 export let data;

	data = data.items

	const addData = (log) => {
		data.push(log);
		data = data
	}

	let routineID = data[0].RoutineID;
	let show = false;
	const toggleShow = () => show = !show;
</script>

<div class="grid grid-cols-3 auto-rows-max gap-3">
    {#each data as routine} 
        {#if routine.Active == true}
          <Card class="h-44 text-center" href="/logs/${routine.id}">
              <h3>{routine.Name}</h3>
              <h5>{stripTime(routine.Created)}</h5>
          </Card>
        {/if}
    {/each}

		<Add {toggleShow}/>

		{#if show}
			<ExcerciseCard {routineID} {toggleShow} updateState={addData}/>
		{/if}
</div>
