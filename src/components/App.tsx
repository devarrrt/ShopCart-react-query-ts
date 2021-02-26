import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { Wrapper, StyledButton } from './App.styles'
import { ItemCart } from './ItemCart/ItemCart';
import { Cart } from './Cart/Cart'
 




export interface ICartItem {
	id: number
	category: string
	description: string
	image: string
	price: number
	title: string
	amount: number
}




const getProducts = async (): Promise<ICartItem[]> => {
	return await ( await fetch( 'https://fakestoreapi.com/products' )).json()
}




const App = (   ) => {
	const [ cartOpen, setCartOpen ] = useState( false )
	const [ cartItems, setCartItems ] = useState( [ ]  as ICartItem[] )
	const { data, isLoading, error } = useQuery<ICartItem[]>('products', getProducts)


const getTotalItems = ( items:ICartItem[] ) => {
	items.reduce( (ack: number, item) => ack + item.amount, 0 )
}

const addToCard = ( clickItem: ICartItem ) => {
setCartItems( prev => {
	const isItemCart = prev.find( item => item.id === clickItem.id )

	if ( isItemCart ) {
		return prev.map( item => (
			item.id === clickItem.id ? { ...item, amount: item.amount  + 1} : item
		))
	}
	return [ ...prev, { ...clickItem, amount : 1 }]
})
}



const removeFromCart = ( id: number) => {
	setCartItems( prev => prev.reduce(( ack, item ) => {
		if ( item.id === id ) {
			if ( item.amount === 1 ) return ack
			return [ ...ack, { ...item, amount: item.amount - 1 }]
		} else {
			return [ ...ack, item ]
		}
	}, [] as ICartItem[] ))
}



if ( isLoading ) {
	return <LinearProgress/>
}
if ( error ) {
	return <div> Something went wrong... </div>  
}



	return (
	<Wrapper> 

		<StyledButton onClick={ ()=> setCartOpen(true) } > 
		<Badge color="error">
		<AddShoppingCartIcon />
		</Badge>
		  </StyledButton>

			<Drawer anchor="right" open={ cartOpen }  
		onClose={ ()=> setCartOpen( false )}>
			<Cart cartItems = { cartItems }  addToCart={ addToCard } removeFromCart={ removeFromCart }   />
		</Drawer>
			<Grid container spacing={ 4 }>
				{ data?.map( (item) => (
					<Grid item key={ item.id } xs={ 12 } sm={ 4 } >
						<ItemCart item={ item } addToCard={ addToCard }  />
					</Grid>	
				))}
			</Grid>

	</Wrapper> 
	)}

export default App
