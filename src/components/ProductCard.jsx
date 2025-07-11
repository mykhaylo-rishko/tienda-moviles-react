import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ id, imgUrl, brand, model, price }) {
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-card__image-container">
          <img src={imgUrl} alt={`${brand} ${model}`} className="product-card__image" />
        </div>
        <div className="product-card__details">
          <h3 className="product-card__model">{model}</h3>
          <p className="product-card__brand">{brand}</p>
          <p className="product-card__price">{price ? `${price} €` : 'Consultar'}</p>
        </div>
      </div>
    </Link>
  );
}