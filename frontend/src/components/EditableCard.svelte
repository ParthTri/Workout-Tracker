<script lang="ts">
	import  Dropdown  from "./DropDown/Dropdown.svelte"
	import  DropdownItem  from "./DropDown/DropdownItem.svelte"
	import { goto } from "$app/navigation";

	// export let innerClass: string;
	export let href: string;

	let style = "w-80 h-44 text-center border-2 rounded-xl p-2 hover:cursor-pointer"
	// style += ` ${innerClass}`
	
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
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={style} on:click={(e) => handleEvent(e)}>
	<div class="flex justify-end"> 
		<Dropdown {updateDropDown}>
				<DropdownItem action={() => console.log("rename")}>Rename</DropdownItem>	
				<DropdownItem action={() => console.log("archive")}>Archive</DropdownItem>	
				<DropdownItem action={() => console.log("delete")}>Delete</DropdownItem>	
		</Dropdown>
	</div>
	<div class="wrapper">
		<slot></slot>
	</div>
</div>
