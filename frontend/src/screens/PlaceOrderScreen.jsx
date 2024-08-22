import React, { useState } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { useNavigate, Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Shipping: </strong> {cart.shippingAddress.address}{' '}
                {cart.shippingAddress.city} {cart.shippingAddress.postalCode}{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Payment: </strong> {cart.paymentMethod}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default PlaceOrderScreen;
