<script>
	export let name;
	export let label;
</script>

<label class="flex flex-col" for={name}>
	<span class="text-sm font-medium text-slate-700">{label}</span>
	<slot />
</label>
