import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-title'>{name}</h3>
                <p className="price">Price: ${price}</p>
                <p className="manufacturer">Manufacturer : {seller}</p>
                <p className="ratings">ratings: {ratings} star</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className="btn-cart">
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Products;