import React, { useEffect, useState } from 'react';
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';

const OrderScreen = () => {
  const { orderId } = { orderId: 10 };
  console.log(orderId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  /* const order = {
    _id: 10,
    orderItems: [
      {
        _id: 13,
        name: 'Lilientahl Berlin Watch Radiant Blue',
        qty: 1,
        price: '299.99',
        image: '/images/playstation.jpg',
        product: 2,
        order: 10,
      },
    ],
    shippingAddress: {
      _id: 10,
      address: 'Árpád utca 23.',
      city: 'Dunabogdány',
      postalCode: '2023',
      country: 'Hungary',
      shippingPrice: '0.00',
      order: 10,
    },
    user: {
      id: 1,
      _id: 1,
      username: 'silvester@email.com',
      email: 'silvester@email.com',
      name: 'Silvester Spath',
      isAdmin: true,
    },
    paymentMethod: 'PayPal',
    taxPrice: '45.00',
    shippingPrice: '0.00',
    totalPrice: '344.99',
    isPaid: false,
    paidAt: null,
    isDelivered: false,
    deliveredAt: null,
    createdAt: '2024-09-02T11:25:53.169570Z',
  }; */

  let itemsPrice;
  function calculateItems(order) {
    const itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    return itemsPrice;
  }

  if (!loading && !error) {
    order.itemsprice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  /*   useEffect(() => {
    if (!order || order._id !== +orderId) {
      dispatch(getOrderDetails(orderId));
    } else if (!order || order === undefined) {
      // Handle order not found case
      console.error('Order not found');
    }
  }, [dispatch, order, orderId]); */

  if (!order.paymentMethod) {
    navigate('/payment');
  }

  return loading ? (
    <Loader>Loading</Loader>
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>SHIPPING</h2>
              <p>
                <strong>Shipping: </strong> {order.shippingAddress.address}
                {', '}
                {order.shippingAddress.city} {order.shippingAddress.postalCode}{' '}
                {order.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>PAYMENT METHOD</h2>
              <p>
                <strong>Payment: </strong> {order.paymentMethod}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>ORDER ITEMS</h2>
            </ListGroup.Item>
            {order.orderItems.length > 0 ? (
              order.orderItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={1}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col>
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={4}>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            ) : (
              <Message variant='info'>Your cart is empty</Message>
            )}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>ORDER SUMMARY</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>${itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderScreen;
