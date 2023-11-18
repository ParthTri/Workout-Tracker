<script lang="ts">
	export let action: () => void;
</script>

<li>
	<button on:click={action}>
		<slot></slot>
	</button>
</li>
