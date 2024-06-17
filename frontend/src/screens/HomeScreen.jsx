import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
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
