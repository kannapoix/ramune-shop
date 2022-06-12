<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Store items</title>
	<meta name="description" content="item list" />
</svelte:head>

<div class="wrapper">
	<div class="cell">
		<picture>
			<img src="sweets_ramune_drink.png" alt="ramune drink paint" />
		</picture>

		<p class="price">¥90</p>

		<form
			method="POST"
			action="https://btcpay.kannadot.tokyo/apps/24Z3sbBgGGpmb1NukZjxJj2vgnxY/pos"
		>
			<input type="hidden" name="orderId" value="CustomOrderId" />
			<button type="submit" name="choiceKey" value={'ramune'}>いますぐ購入</button>
		</form>
	</div>
	<div class="cell">
		<picture>
			<img src="sweets_ramune_drink.png" alt="ramune drink paint" />
		</picture>

		<p class="price">¥90</p>

		<form
			method="POST"
			action="https://btcpay.kannadot.tokyo/apps/24Z3sbBgGGpmb1NukZjxJj2vgnxY/pos"
		>
			<input type="hidden" name="orderId" value="CustomOrderId" />
			<button type="submit" name="choiceKey" value={'ramune'}>いますぐ購入</button>
		</form>
	</div>
</div>

<style>
	.price {
		font-size: 3rem;
		margin-top: 2rem;
		margin-bottom: 0;
	}

	.cell {
		text-align: center;
	}

	img {
		height: 200px;
		width: 200px;
		margin-top: 5rem;
	}

	.wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-columns: minmax(200px, auto);
		grid-auto-rows: minmax(200px, auto);
	}

	@media (max-width: 480px) {
		.wrapper {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
