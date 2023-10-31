<script lang="ts">
	import "../app.postcss";
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { HomeSolid, GridSolid, AdjustmentsVerticalSolid } from 'flowbite-svelte-icons';

	var routes = [
		{
			name: "Dash",
			path: "/"
		},
		{
			name: "Routines",
			path:"/routines"
		}
	]
</script>


<main>
	<slot />

</main>

<BottomNav navType="group" classInner="bottom-0 left-0 grid-cols-4">
	<BottomNavItem href="/">
		<HomeSolid />
	</BottomNavItem>

	<BottomNavItem href="/routines">
		<GridSolid />
	</BottomNavItem>

	<BottomNavItem hrerf="/settings">
		<AdjustmentsVerticalSolid />
	</BottomNavItem>

</BottomNav>

