import React from 'react';
import { Table } from 'react-bootstrap';
import { Product } from '../types/types';

type ProductTableProps = {
  products: Product[];
};

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <Table striped bordered hover className="product-table">
      <thead>
        <tr>
          <th>Produk</th>
          <th>Provider</th>
          <th>Harga</th>
          <th>Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.produk}</td>
            <td>{product.provider}</td>
            <td>{product.hargaJual}</td>
            <td>{product.desc}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
