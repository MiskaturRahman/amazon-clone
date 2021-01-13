import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />


                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping cart is empty</h2>
                        <p>
                            You have no items in your shopping cart. To buy one or more items, click "Add to basket" below the item.
        </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Cart</h2>

                            {/* LISTING ALL PRODUCTS FROM THE BASKET */}
                            {basket?.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1>subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}
//react-currency-format
export default Checkout
