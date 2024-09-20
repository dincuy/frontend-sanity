import React from 'react';
import { Card } from 'react-bootstrap';
import { Product } from '../types/types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.produk}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.provider}</Card.Subtitle>
        <Card.Text>{product.desc}</Card.Text>
        <Card.Footer>{product.hargaJual}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
