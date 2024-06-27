import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>Latest Products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
              {' '}
              {/* 12 columns, 1 (12/12) on sm, 2 (12/6) on md, 3 (12/4) on lg, 4 (12/3) on xl  */}
              <Product product={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
