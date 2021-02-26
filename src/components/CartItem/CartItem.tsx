import React from 'react'
import { WrapperCartItem } from './CartItem.styles';
import { Button } from '@material-ui/core'
import { ICartItem } from './../App';


interface CartItemInterface {
	removeFromCart: (id: number) => void
	item: ICartItem
	addToCart: (item: ICartItem) => void
}


export const CartItem: React.FC<CartItemInterface> = ({ removeFromCart, item, addToCart }) => {
	return (
		<WrapperCartItem>
			<div>
				<h3> {item.title} </h3>
				<div className="information">
					<p> Price: ${item.price} </p>
					<p> Total: ${(item.amount * item.price).toFixed(2)}  </p>
				</div>
				<div className="buttons">
					<Button size="small"
						disableElevation
						variant='contained'
						onClick={() => removeFromCart(item.id)}
					>
						-
		 			</Button>
					<p> {item.amount} </p>
					<Button size="small"
						disableElevation
						variant='contained'
						onClick={() => addToCart( item ) }
					>
						+
		 			</Button>
				</div>
			</div>
			<img src={ item.image } alt={ item.title }  />
		</WrapperCartItem>
	)
}
