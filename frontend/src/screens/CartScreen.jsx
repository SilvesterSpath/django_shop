import React, { useEffect } from 'react';
import { Row, Col, Image, Form, ListGroup } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Message from '../components/Message';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const cartItems = cart.cartItems;

  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const qty = +searchParams.get('qty');

  useEffect(() => {
    if (+id) {
      dispatch(addToCart(+id, qty));
    }
  }, [dispatch, id, qty]);

  const navigate = useNavigate();

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default CartScreen;
