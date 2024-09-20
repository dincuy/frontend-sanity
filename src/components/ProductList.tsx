import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/types';

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <div key={product._id} className="m-2">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
