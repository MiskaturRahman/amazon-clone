import Button from 'react-bootstrap/Button';
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider/StateProvider';

function CheckoutProduct({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkout__product">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">

                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))

                    }
                </div>

                <Button onClick={removeFromBasket}>Remove from Cart</Button>
            </div>
        </div>
    )
}

export default CheckoutProduct
