import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import ProductActions from '../components/ProductActions';
import useFetchWithCache from '../hooks/useFetchWithCache';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useFetchWithCache(
    `https://itx-frontend-test.onrender.com/api/product/${productId}`
  );

  if (isLoading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <Link to="/" className="back-link">← Volver al listado</Link>
      <div className="pdp-container">
        <div className="pdp-image-container">
          <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
        </div>
        <div className="pdp-details-container">
          <ProductDescription product={product} />
          <ProductActions productId={product.id} options={product.options} />
        </div>
      </div>
    </div>
  );
}