import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="product-image" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="single-product-btn"
                    onClick={() => props.productHandler(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;