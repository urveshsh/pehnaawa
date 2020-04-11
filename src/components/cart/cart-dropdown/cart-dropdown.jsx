import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../../custom-button/custom-button';
import {selectCartItems} from '../../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.scss'

const Cart = ({cartItems}) => (
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
                :
                <span className='empty-message'>Your Cart is Empty</span>
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems 
})

export default connect(mapStateToProps)(Cart);