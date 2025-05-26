<script>
	import Counter from '$lib/Counter.svelte';
	let name = 'world';
</script>

<Counter />

<h1 class="text-3xl font-bold text-blue-600">Hello {name}!</h1>
<input bind:value={name} class="mt-4 p-2 border" placeholder="Type your name..." />