import Button from 'react-bootstrap/Button';
import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../StateProvider/Reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>

                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift!
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <Button>Proceed to checkout</Button>
        </div>
    )
}

export default Subtotal
