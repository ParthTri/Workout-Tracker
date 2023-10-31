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

	<BottomNav position="absolute" navType="group" classInner="grid-cols-4">
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

</main>
