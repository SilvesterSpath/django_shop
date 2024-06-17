import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded-1 border-1 shadow '>
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={product.name}
          className='rounded-1'
        />

        <Card.Body>
          <Card.Title as='div'>
            <strong className='text-decoration-none'>{product.name}</strong>
          </Card.Title>
          <Card.Text>
            <div className='my-3'>
              {product.rating} from {product.numReviews}
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
                color={`#f8e825`}
              />
            </div>
          </Card.Text>
          <Card.Text as='h4'>${product.price}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default Product;
