import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider';
import './Product.css'
import { Link } from 'react-router-dom'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    };

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
<<<<<<< HEAD
            <button onClick={addToBasket}>Add to busket</button>
=======
            <button>Add to busket</button>

>>>>>>> 27a0f82ab0edaa4cac3c72afc8e074a25eff6123
            <Link>see more </Link>
        </div>

    )
}

export default Product
