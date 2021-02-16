import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const eventHandler = (product) =>{
        console.log('product added',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="product-container">
                {
                    product.map(pd => <Product 
                        product = {pd}
                        productHandler={eventHandler}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>           
        </div>
    );
};

export default Shop;