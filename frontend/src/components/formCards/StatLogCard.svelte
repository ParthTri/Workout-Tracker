<script lang="ts">
	import CardWrapper from "./CardWrapper.svelte";
	import Button from "./Button.svelte";
	import FormLabel from "./FormLabel.svelte";

	import { extractFormData, createStatLog } from "$lib/create";

	import type { StatLogData } from "$lib/interfaces";

	export let statID: string;
	export let updateState: (obj: StatLogData) => void;
	export let toggleShow: () => void;

	let date = new Date().toISOString().split("T")[0];

	const handleSubmission = (e: HTMLFormElement) => {
		let stat = {} as StatLogData;
		extractFormData(e, stat);

		createStatLog(stat, statID)
			.then(res => {
				if (res.code == undefined) {
					updateState(stat)
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

		<FormLabel name="date" label="Date">
			<input name="date" type="date" value={date}>
		</FormLabel>

		<FormLabel name="Measurement" label="Entry">
			<input name="Measurement" type="text">
		</FormLabel>

		<Button>Log</Button>
	</form>
</CardWrapper>

