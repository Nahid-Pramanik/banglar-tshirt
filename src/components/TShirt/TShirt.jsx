import PropTypes from 'prop-types';
import './TShirt.css'

const TShirt = ({tShirt, handleAddToCart}) => {
    const {name, price, picture} = tShirt;
    return (
        <div className='t-shirt-item'>
            <img src={picture} alt="" />
            <div>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=> handleAddToCart(tShirt)}>
                Buy Now
            </button>
        </div>
    );
};

TShirt.propTypes = {
    tShirt: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func,
}

export default TShirt;