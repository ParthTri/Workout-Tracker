<script lang="ts">
	import CardWrapper from './CardWrapper.svelte';
	import FormLabel from "./FormLabel.svelte"
	import Button from "./Button.svelte"
	import type { ExcerciseData } from "$lib/interfaces.ts"

	import { extractFormData, createExercise } from '$lib/api/create';

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
			Weight: tmp.weight,
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

	<CardWrapper {toggleShow}>
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
</CardWrapper>
