<script lang="ts">
	import { Modal, Button } from "flowbite-svelte";
	import { ExclamationCircleOutline } from "flowbite-svelte-icons";
	import  Dropdown  from "./DropDown/Dropdown.svelte"
	import  DropdownItem  from "./DropDown/DropdownItem.svelte"
	import { goto } from "$app/navigation";

	// export let innerClass: string;
	export let href: string;
	export let title: string;
	export let updateData: (payload: any) => void;
	export let deleteData: () => void;

	let deleteModal = false;

	let style = "w-80 h-44 text-center border-2 rounded-xl p-2 hover:cursor-pointer"
	// style += ` ${innerClass}`
	
	// BUG: Fix dropdown navigation
	// Whenever pressing an option and clicking of the options navigation is triggered
	let dropDownOpen = false;
	let dropDownClosed = true;
	const updateDropDown = (val: boolean) => {
		dropDownOpen = val;
	}

	const handleEvent = (e: MouseEvent) => {
		if (!dropDownOpen && dropDownClosed) {
			goto(href)
		} else {
			dropDownClosed = !dropDownClosed;
		}
	}

	// BUG: Need to update prev title to the new title
	let enableRename: boolean = false;
	let prevTitle: string = title;
	const triggerRename = () => {
		enableRename = !enableRename;
	}

	const renameTitle = (e: KeyboardEvent) => {
		if (e.key == "Enter") {
			enableRename = false;	
			if (title != prevTitle) {
				updateData({ Name: title });
			}
		}
	}

	const triggerArchive = () => {
		updateData({ Active: false }) 
	}

	const triggerDelete = () => {
		deleteModal = true;
	}
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={style} on:click={(e) => handleEvent(e)}>
	<div class="flex justify-end"> 
		<Dropdown {updateDropDown}>
				<DropdownItem action={triggerRename}>Rename</DropdownItem>	
				<DropdownItem action={triggerArchive}>Archive</DropdownItem>	
				<DropdownItem action={triggerDelete}>Delete</DropdownItem>	
		</Dropdown>
	</div>
	<div class="wrapper">
		{#if enableRename}
			<input type="text" bind:value={title} on:keypress={renameTitle}>
		{:else}
			<h3>{title}</h3>
		{/if}

		<slot name="other" />
	</div>

	<Modal bind:open={deleteModal}>
		<div class="text-center">
			<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
			<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Excercise?</h3>
			<Button color="red" class="mr-2" on:click={() => {
				deleteModal = false;
				deleteData();
			}}>Yes, I'm sure</Button>
			<Button color="alternative" on:click={() => deleteModal=false}>No, cancel</Button>
		</div>
	</Modal>
</div>
