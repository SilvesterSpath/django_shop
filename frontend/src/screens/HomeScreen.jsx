import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Something went wrong..</div>;
  }

  return (
    <div>
      <h3>Latest Products</h3>
      <Row>
        {products.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
            {' '}
            {/* 12 columns, 1 (12/12) on sm, 2 (12/6) on md, 3 (12/4) on lg, 4 (12/3) on xl  */}
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
