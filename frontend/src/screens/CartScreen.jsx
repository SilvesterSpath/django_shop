import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log(cart.cartItems);
  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const qty = +searchParams.get('qty');
  console.log('qty', qty, 'id', +id);

  useEffect(() => {
    if (+id) {
      console.log('id');
      dispatch(addToCart(+id, qty));
    }
  }, [dispatch, id, qty]);

  const navigate = useNavigate();
  return <div>CartScreen: {qty}</div>;
};

export default CartScreen;
