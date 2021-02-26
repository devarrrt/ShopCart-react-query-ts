import React from 'react'
import {Button} from '@material-ui/core'
import { ItemWrapper } from './ItemCart.styles'
import { ICartItem } from '../App'




interface IItemCart {
	item: ICartItem
	addToCard: ( item: ICartItem ) => void
}

export const ItemCart: React.FC<IItemCart> = ({ item, addToCard }) => {
	return (
		<ItemWrapper>
			<img src={ item.image } alt={ item.title } />
			<div>
				<h3> { item.title } </h3>
				<p> { item.description } </p>
				<h3> ${ item.price } </h3>  
			</div>
			<Button onClick={ ( )=> addToCard(item) }> Add this </Button>
		</ItemWrapper>
	)
}
