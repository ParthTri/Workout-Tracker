<script lang="ts">
	import { Card, Dropdown, DropdownItem, Button } from "flowbite-svelte"
	import { DotsHorizontalOutline } from "flowbite-svelte-icons";

	export let innerClass: string;
	export let href: string;

	let style = "w-80 h-44 text-center"
	style += ` ${innerClass}`
</script>


<Card {href} class={style}>
	<!-- <div class="flex justify-end"> -->

		<!-- <DotsHorizontalOutline> -->
		<!-- <Dropdown class="w-36"> -->
		<!-- 	<DropdownItem>Test</DropdownItem> -->
		<!-- 	<DropdownItem></DropdownItem> -->
		<!-- 	<DropdownItem></DropdownItem> -->
		<!-- </Dropdown> -->

	<!-- </div> -->
	<slot></slot>
</Card>
