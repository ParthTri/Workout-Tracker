<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import FormLabel from "./FormLabel.svelte"
	import Button from "./Button.svelte"

	import type { RoutineData } from "$lib/interfaces.ts"
	import { createRoutine, extractFormData } from "$lib/create.ts";
	import CardWrapper from './CardWrapper.svelte';

	export let updateState: (val: any) => void;
	export let toggleShow : () => void;

	const handleSubmission = (event: HTMLFormElement) => {
		let tmp = {} as RoutineData;
		extractFormData(event, tmp);

		let formData: RoutineData = {
			name: tmp.name,
		}
		
		createRoutine(formData).then(res => {
			if (res.code == undefined) {
				updateState(res);
				toggleShow()
			} else {
				console.log(res)
			}
			})
	}
</script>

<CardWrapper {toggleShow}>
	<form class="h-full grid grid-cols-1 grid-rows-auto gap-4" on:submit|preventDefault={(e) => handleSubmission(e)}>
	<FormLabel name="name" label="Routine Name">
		<input name="name" type="text" value=""/>
	</FormLabel>

	<Button>Create</Button>
	</form>
</CardWrapper>
