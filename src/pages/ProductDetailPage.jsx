import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import ProductActions from '../components/ProductActions';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://itx-frontend-test.onrender.com/api/product/${productId}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener el detalle del producto');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]); // El efecto se ejecuta cada vez que el productId cambie

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
          <ProductActions options={product.options} />
        </div>
      </div>
    </div>
  );
}