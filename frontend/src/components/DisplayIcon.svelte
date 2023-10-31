<script lang="ts">
	import * as Icons from "flowbite-svelte-icons";
	
	export let name: string;

	const getIcon = (name: string) => {
		const IconComponent = Icons[name];

		return IconComponent;
	}
</script>


<svelte:component this={getIcon(name)}/>
