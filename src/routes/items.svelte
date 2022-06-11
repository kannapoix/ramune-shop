<script context="module">
	export const prerender = true;

	const ramunePrice = import.meta.env.VITE_RAMUNE_PRICE;
	const shopPath = import.meta.env.VITE_SHOP_PATH;
	const actionEndpoint = import.meta.env.VITE_ACTION_ENDPOINT;
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

		<p class="item-name">森永大粒ラムネ</p>
		<p class="price">¥{ramunePrice}</p>
		<form method="POST" action={actionEndpoint}>
			<input type="hidden" name="orderId" value="CustomOrderId" />
			<input type="hidden" name="redirectUrl" value={shopPath} />
			<button type="submit" name="choiceKey" value={'ramune'}>いますぐ購入</button>
		</form>
	</div>
	<div class="cell">
		<picture>
			<img src="sweets_ramune_drink.png" alt="ramune drink paint" />
		</picture>

		<p class="item-name">森永大粒ラムネ ミックスベリーソーダ味</p>
		<p class="price">¥{ramunePrice}</p>

		<form method="POST" action={actionEndpoint}>
			<input type="hidden" name="orderId" value="CustomOrderId" />
			<input type="hidden" name="redirectUrl" value={shopPath} />
			<button type="submit" name="choiceKey" value={'ramune'}>いますぐ購入</button>
		</form>
	</div>
</div>

<style>
	.item-name {
		font-size: 1.5rem;
		margin-top: 2rem;
	}
	.price {
		font-size: 3rem;
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
