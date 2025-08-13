<script lang="ts">
	import { UButton, UField, UInput } from '$lib/components/index.js';
</script>

<svelte:head>
	<title>OLIX</title>
</svelte:head>
<div class="flex flex-col gap-5 p-10">
	<UField.Group>
		<UField.Label>Email</UField.Label>
		<UInput color="green" />
		<UField.Cribe>We'll only use this for spam.</UField.Cribe>
	</UField.Group>
	<UButton color="green">Submit</UButton>
</div>
