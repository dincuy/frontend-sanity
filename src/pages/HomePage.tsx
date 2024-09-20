import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Tabs from '../components/Tabs';
import { Product } from '../types/types';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductTable from '../components/ProductTable';

type HomePageProps = {
  products: Product[];
  loading: boolean; // Tambahkan prop loading
};

const HomePage: React.FC<HomePageProps> = ({ products, loading }) => {
  const providers = Array.from(new Set(products.map(product => product.provider)));
  const [activeTab, setActiveTab] = useState(providers[0]);

  const filteredProducts = products.filter(product => product.provider === activeTab);

  return (
    <div>
      <h1>Produk Voucher Internet</h1>
      <Tabs tabs={providers} activeTab={activeTab} onTabClick={setActiveTab} />
      {loading ? <LoadingSpinner /> : <ProductTable products={filteredProducts} />}
    </div>
  );
};

export default HomePage;
