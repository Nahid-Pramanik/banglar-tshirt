import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import './Home.css'
import { useState } from "react";
import toast from 'react-hot-toast';



const Home = () => {

    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        if (cart.includes(product)) {
            toast('You are already added this t-Shirt');
        }
        else {
            const newCart = [...cart, product];
                        setCart(newCart);
        }

    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className="home-container">
            <div className="t-shirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;