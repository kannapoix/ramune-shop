<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Items</title>
	<meta name="description" content="Item list" />
</svelte:head>

<picture>
	<img src="sweets_ramune_drink.png" alt="Welcome" />
</picture>

<form method="POST" action="https://btcpay.kannadot.tokyo/apps/24Z3sbBgGGpmb1NukZjxJj2vgnxY/pos">
	<input type="hidden" name="orderId" value="CustomOrderId" />
	<button type="submit" name="choiceKey" value={'ramune'}>ほしい</button>
</form>
