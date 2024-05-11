import PropTypes from 'prop-types';

const ConditionalRendaring = ({cart}) => {

    let message ;
    if(cart.length === 2 ){
        message = <p>you add 2 product</p>
    }
    else{
        message = <p>buy some shirt</p>
    }

    return (
        <div>
            <p>{message}</p>

            {cart.length > 3 ? <span>onek shirt kinci</span> : <p> fokinni</p>}

            {cart.length === 0 && <span>Kicui toh kinli na</span>}
            {cart.length === 4 || <p>4ta toh hoilo na</p>}
        </div>
    );
};

ConditionalRendaring.propTypes = {
    cart: PropTypes.array,
}

export default ConditionalRendaring;