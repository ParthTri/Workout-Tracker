<script lang="ts">
	import CardWrapper from "./CardWrapper.svelte";
	import Button from "./Button.svelte";
	import FormLabel from "./FormLabel.svelte";

	import { extractFormData } from "$lib/create";

	import type { StatLogData } from "$lib/interfaces";

	export let updateState: (obj: StatLogData) => void;
	export let toggleShow: () => void;

	let date = new Date().toISOString().split("T")[0];

	const handleSubmission = (e: HTMLFormElement) => {
		let stat = {} as StatLogData;
		extractFormData(e, stat);
		console.log(stat)
		updateState(stat)
		toggleShow()
	}

</script>

<CardWrapper {toggleShow}>
	<form class="grid grid-cols-1 grid-rows-auto gap-4"
		on:submit|preventDefault={(e) => handleSubmission(e)}>

		<FormLabel name="date" label="Date">
			<input name="date" type="date" value={date}>
		</FormLabel>

		<FormLabel name="Measurement" label="Entry">
			<input name="Measurement" type="text">
		</FormLabel>

		<Button>Log</Button>
	</form>
</CardWrapper>

