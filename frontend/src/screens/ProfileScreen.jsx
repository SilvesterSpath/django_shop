import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../actions/userActions';

const ProfileScreen = () => {
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
      </Col>

      <Col md={3}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
