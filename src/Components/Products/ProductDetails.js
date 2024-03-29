import React from 'react';
import ProductGallery from './ProductGallery';
import { Col, Row } from 'react-bootstrap';
import ProductText from './ProductText';

const ProductDetails = () => {
  return (
    <div>
    <Row className="py-3">
    <Col lg="4">
      <ProductGallery />
    </Col>
    <Col lg="8">
      <ProductText />
    </Col>
  </Row>
    </div>
  );
}

export default ProductDetails;