import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import './ProductListPage.css';

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://itx-frontend-test.onrender.com/api/product');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              brand={product.brand}
              model={product.model}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          ))
        ) : (
          <p>No se encontraron productos con ese criterio.</p>
        )}
      </div>
    </div>
  );
}