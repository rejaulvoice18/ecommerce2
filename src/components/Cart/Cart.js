import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;

    }

    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 11.5;
    }
    
    const tax = total/10;
    const grandTotal = (total + shipping + tax);
    const totalBeforeTax = (total + shipping);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="main-cart-container">
            <h3>Order Summary</h3>
            <h4>Items ordered: {cart.length}</h4>
            <p><small>items: ${formatNumber(total)}</small></p>
            <p><small>Shipping & Handling: ${formatNumber(shipping)}</small></p>
            <p><small>Total before tax: ${formatNumber(totalBeforeTax)}</small></p>
            <p><small>Estimated Tax: ${formatNumber(tax)}</small></p>
            <p>Order Total: ${formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;