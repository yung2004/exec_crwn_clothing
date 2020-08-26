import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';
 
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon'>

        {/* important to set width/ height for svg, otherwise they are zero*/ }
        <ShoppingIcon
            onClick={toggleCartHidden}
         className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ( {
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon);