<script lang="ts">
 import { page } from '$app/stores';
 import "../app.postcss";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
 $: activeUrl = $page.url.pathname;

 var routes = [
   {
     name: "Dash",
     path: "/"
   },
   {
     name: "Routines",
     path:"/routines"
   },
   {
     name:"Logs",
     path:"/logs"
   }
 ]
</script>


<svelte:head>
    <title>Workout Tracker</title>
</svelte:head>

<Sidebar {activeUrl}>
    <SidebarWrapper>
        <SidebarGroup>
            {#each routes as route}
              <SidebarItem label={route.name} href={route.path}>
              </SidebarItem>
            {/each}
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>

<slot />
