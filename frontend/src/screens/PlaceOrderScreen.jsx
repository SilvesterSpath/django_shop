import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {
  return <div>PlaceOrderScreen</div>;
};

export default PlaceOrderScreen;
