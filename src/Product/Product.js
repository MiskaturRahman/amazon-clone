import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))

                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button>Add to busket</button>

            <Link>see more </Link>
        </div>

    )
}

export default Product
