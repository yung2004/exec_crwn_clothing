import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';
 
import { SelectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon'>

        {/* important to set width/ height for svg, otherwise they are zero*/ }
        <ShoppingIcon
            onClick={toggleCartHidden}
         className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = state => ({
    // called selector ( pull slice data from state)
    itemCount: SelectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ( {
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);