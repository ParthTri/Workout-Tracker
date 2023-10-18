<script>
	import { Indicator } from "flowbite-svelte"
	export let color = "";
</script>

<span class="flex items-center space-between">
	<Indicator color={color}/>
	<slot />
</span>
