import React from 'react'
import { WrapperCart } from './Cart.styles';
import { CartItem } from './../CartItem/CartItem';
import { ICartItem } from './../App';


interface ICart {
	cartItems: ICartItem[]; 
	addToCart: ( item: ICartItem ) => void;
	removeFromCart: ( id: number ) => void
}



export const Cart: React.FC<ICart> = ({ cartItems, addToCart, removeFromCart }) => {

	const calculateTotal = ( items: ICartItem[] ) => items.reduce( (ack: number, item) => ack + item.amount * item.price, 0 )
	

	return (
	<WrapperCart>
		<h2> Your shopping cart  </h2>  
		{ cartItems.length === 0 ? <p> No items to cart </p> : null }
		{ cartItems.map( item=> (
			<CartItem  
			key={ item.id }
			item={ item }
			addToCart={ addToCart }
			removeFromCart={ removeFromCart }
			/>
		))}
		<h2> Total: ${ calculateTotal( cartItems ).toFixed(2) } </h2>
	</WrapperCart>
	)
}
