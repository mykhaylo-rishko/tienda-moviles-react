import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductActions.css';

export default function ProductActions({ productId, options }) {
  const { setCartCount } = useCart();
  const [selectedStorage, setSelectedStorage] = useState(options?.storages?.[0]?.code || '');
  const [selectedColor, setSelectedColor] = useState(options?.colors?.[0]?.code || '');
  const [isAdding, setIsAdding] = useState(false);

 const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      const response = await fetch('https://itx-frontend-test.onrender.com/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: productId,
          colorCode: selectedColor,
          storageCode: selectedStorage,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al añadir el producto al carrito');
      }
      const data = await response.json();
      setCartCount(data.count);
      alert('¡Producto añadido al carrito!');
    } catch (error) {
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="product-actions">
      <div className="selectors-container">
        <div className="selector">
          <label htmlFor="storage-select">Almacenamiento:</label>
          <select id="storage-select" value={selectedStorage} onChange={e => setSelectedStorage(e.target.value)}>
            {options?.storages?.map(storage => (
              <option key={storage.code} value={storage.code}>{storage.name}</option>
            ))}
          </select>
        </div>
        <div className="selector">
          <label htmlFor="color-select">Color:</label>
          <select id="color-select" value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
            {options?.colors?.map(color => (
              <option key={color.code} value={color.code}>{color.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={isAdding}>
      {isAdding ? 'Añadiendo...' : 'Añadir al carrito'}
      </button>
    </div>
  );
}