import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { delCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch()


    const handleclose = (item) => {
        dispatch(delCart(item))
    }

    const cartItems = (cartItem) => {
        return (
          <div>
            <div className="flex justify-center items-center w-2/4 mx-auto my-5 border-2 border-solid py-3">
              <div className='w-2/4'>
                <img src={cartItem.img} className="cart-img" />
              </div>

              <div className="mx-10 w-2/4">
                <h4>Name : {cartItem.title}</h4>
                <h4>Price : {cartItem.price}</h4>
              </div>
              <button
                className="btn btn-sm btn-circle "
                onClick={() => handleclose(cartItem)}
              >
                X
              </button>
            </div>
          </div>
        );
    }

    const emptyCart = () => {
        return(
            <div className='my-5'>
                <h2 className='text-3xl font-bold text-center'>Cart is Empty</h2>
            </div>
        )
    }

    const checkout = () => {
        return (
          <div className='flex justify-center'>
            <Link to="/checkout">
              <button className='btn btn-ouline'>Proceed to Checkout</button>
            </Link>
          </div>
        );
    } 
    return (
        <div>
            {state.length === 0 && emptyCart()}
           {state.length !== 0 && state.map(cartItems) }
           {state.length !== 0 && checkout()}
        </div>
    );
};

export default Cart;