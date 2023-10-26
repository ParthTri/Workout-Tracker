<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import FormLabel from "./FormLabel.svelte"
	import Button from "./Button.svelte"
	import type { ExcerciseData } from "$lib/interfaces.ts"

	import { extractFormData, createExercise } from '$lib/create';

	let date = new Date().toISOString().split("T")[0];
	export let routineID: string;

	export let updateState: (obj: ExcerciseData) => void;
	export let toggleShow: () => void;

	const handleSubmission = (event: HTMLFormElement) => {
		let tmp = {};
		extractFormData(event, tmp);

		let formData: ExcerciseData = {
			RoutineID: routineID,
			Date: date,
			Name: tmp.name,
			Weight: tmp.weight ? 0 : -1,
			Active: true,
		}
		
		createExercise(formData).then(res => {
			if (res.code == undefined) {
				updateState(res);
				toggleShow();
			} else {
				console.log(res)
			}
		})
	}
</script>

<Card class="min-h-fit absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-96 drop-shadow-2xl">
	<form class="h-full grid grid-cols-1 grid-rows-auto gap-4" on:submit|preventDefault={(e) => handleSubmission(e)}>
	<FormLabel name="name" label="Excercise Name">
		<input name="name" type="text" value=""/>
	</FormLabel>

	<FormLabel name="weight" label="">
		<span>
			<input name="weight" type="checkbox" value=""/>
			Weight
		</span>
	</FormLabel>

	<Button>Create</Button>
	</form>
</Card>
