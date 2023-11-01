<script lang="ts">
	export let name: string;
	export let label: string;
</script>

<label class="flex flex-col" for={name}>
	<span class="text-sm font-medium text-slate-700">{label}</span>
	<slot />
</label>
