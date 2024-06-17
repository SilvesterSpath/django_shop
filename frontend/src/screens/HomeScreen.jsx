import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <div>
      <h3>Latest Products</h3>
      <Row>
        {products.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
            {' '}
            {/* 12 columns, 1 (12/12) on sm, 2 (12/6) on md, 3 (12/4) on lg, 4 (12/3) on xl  */}
            <div className='card'>
              <img src={item.image} alt={item.name} />
              <div className='card-body'>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <h6>${item.price}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
