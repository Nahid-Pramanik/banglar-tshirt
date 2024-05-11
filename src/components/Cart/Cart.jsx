import PropTypes from 'prop-types';
import ConditionalRendaring from '../ConditionalRendaring/ConditionalRendaring';

const Cart = ({cart, handleRemoveFromCart}) => {

    // let totalPrice = 0;
    // for(const item of cart){
    //     console.log(item);
    //     totalPrice = totalPrice + item.price;
    // }

    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>

            {
                cart.map((ts, idx) => <div key={idx}>
                    {ts.name} 
                    <button onClick={() => handleRemoveFromCart(ts._id)}>X</button>
                </div>)
            }

            <ConditionalRendaring 
            key={cart._id}
            cart={cart}
            ></ConditionalRendaring>

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    handleRemoveFromCart: PropTypes.func,
}

export default Cart;