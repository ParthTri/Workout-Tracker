<script lang="ts">
	import "../app.postcss";
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import DisplayIcon from "$components/DisplayIcon.svelte";

	var routes = [
		{
			name: "Dash",
			path: "/",
			icon: "HomeSolid",
		},
		{
			name: "Routines",
			path:"/routines",
			icon: "GridSolid"	
		},
		{
			name: "Stats",
			path:"/stats",
			icon: "RulerCombinedSolid",
		},
		{
			name: "Settings",
			path:"/settings",
			icon: "AdjustmentsVerticalSolid",
		}
	]
</script>


<main>
	<slot />

</main>

<BottomNav navType="group" classInner="bottom-0 left-0 grid-cols-4">
	{#each routes as route}
		<BottomNavItem href={route.path}>
			<DisplayIcon name={route.icon}/>
		</BottomNavItem>
	{/each}
</BottomNav>

