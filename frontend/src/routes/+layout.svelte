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
   }
 ]
</script>


<svelte:head>
    <title>Workout Tracker</title>
</svelte:head>

<main class="grid md:grid-cols-[0.1fr_1fr]">
    <aside class="w-full h-screen">
        <Sidebar {activeUrl} class="w-full h-full">
            <SidebarWrapper class="h-full">
                <SidebarGroup>
                    {#each routes as route}
                        <SidebarItem label={route.name} href={route.path}>
                        </SidebarItem>
                    {/each}
                </SidebarGroup>
            </SidebarWrapper>
        </Sidebar>
    </aside>

    <slot />
</main>
