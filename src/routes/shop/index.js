import { h } from 'preact';
import style from './style';

const Shop = () => {

	return (
		<div class={style.shop}>
			<div class={style.item}>
				<ItemBox imgpath="/assets/sweets_ramune_drink.png" />
				<PayButton value="ramune" />
			</div>
			<div class={style.item}>
				<ItemBox imgpath="/assets/food_hijousyoku_yellow.png" />
				<PayButton value="mate" />
			</div>
		</div>
	);
}

const ItemBox = (props) => {
	return <div class={style.itembox}>
		<img src={props.imgpath} width="80" />
	</div>
}

const PayButton = (props) => {
	return (
		<form method="POST" action="https://btcpay.kannadot.tokyo/apps/24Z3sbBgGGpmb1NukZjxJj2vgnxY/pos">
			<input type="hidden" name="orderId" value="CustomOrderId" />
			<button class={style.paybutton} type="submit" name="choiceKey" value={props.value}>ほしい</button>
		</form>
	)
}

export default Shop;
