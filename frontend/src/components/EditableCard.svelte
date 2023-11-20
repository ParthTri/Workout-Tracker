<script lang="ts">
	import  Dropdown  from "./DropDown/Dropdown.svelte"
	import  DropdownItem  from "./DropDown/DropdownItem.svelte"
	import { goto } from "$app/navigation";

	// export let innerClass: string;
	export let href: string;
	export let title: string;
	export let rename: (title: string) => void;

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

	let enableRename: boolean = false;
	let prevTitle: string = title;
	const triggerRename = () => {
		enableRename = !enableRename;
	}

	const renameTitle = (e: KeyboardEvent) => {
		if (e.key == "Enter") {
			enableRename = false;	
			if (title != prevTitle) {
				rename(title);
			}
		}
	}
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={style} on:click={(e) => handleEvent(e)}>
	<div class="flex justify-end"> 
		<Dropdown {updateDropDown}>
				<DropdownItem action={() => console.log("rename")}>Rename</DropdownItem>	
				<DropdownItem action={() => console.log("archive")}>Archive</DropdownItem>	
				<DropdownItem action={() => console.log("delete")}>Delete</DropdownItem>	
				<DropdownItem action={triggerRename}>Rename</DropdownItem>	
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
</div>
