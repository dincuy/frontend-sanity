import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { Product } from './types/types';
import sanityClient from './sanity/sanityClient';
import './styles.css'; // Impor file CSS

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await sanityClient.fetch(`*[_type == "paket"]`);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading false setelah data diambil, baik berhasil atau gagal
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <HomePage products={products} loading={loading} />
    </div>
  );
};

export default App;
