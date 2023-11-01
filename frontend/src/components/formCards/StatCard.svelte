<script lang="ts">
	import CardWrapper from './CardWrapper.svelte';
	import Button from './Button.svelte';
	import FormLabel from './FormLabel.svelte';

	import { extractFormData, createStat } from '$lib/create';
	import type { StatData } from "$lib/interfaces"

	export let updateState: (obj: StatData) => void;
	export let toggleShow: () => void;

	const handleSubmission = (e: HTMLFormElement) => {
		let stat = {} as StatData;
		extractFormData(e, stat);

		createStat(stat)
			.then(res => {
				if (res.code == undefined) {
					updateState(res)
					toggleShow()
				} else {
					console.log(res)
				} 
		})
	}

</script>

<CardWrapper {toggleShow}>
	<form class="grid grid-cols-1 grid-rows-auto gap-4"
		on:submit|preventDefault={(e) => handleSubmission(e)}>
		
	<FormLabel name="Name" label="Name">
		<input name="Name" type="text">
		</FormLabel>

	<Button>Track</Button>
	</form>
</CardWrapper>

