import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://127.0.0.1:8000/api/products/');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div>No Product yet</div>;
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
