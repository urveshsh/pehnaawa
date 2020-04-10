import React from 'react';
import CustomButton from '../../custom-button/custom-button';
import './cart-dropdown.scss'

const Cart = () => (
    <div className = 'cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

export default Cart;