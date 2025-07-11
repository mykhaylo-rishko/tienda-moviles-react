import { useState } from 'react';
import './ProductActions.css';

export default function ProductActions({ options }) {
  // Estados para guardar la opción seleccionada por el usuario
  const [selectedStorage, setSelectedStorage] = useState(options?.storages?.[0]?.code || '');
  const [selectedColor, setSelectedColor] = useState(options?.colors?.[0]?.code || '');

  const handleAddToCart = () => {
    // Lógica para añadir al carrito (la implementaremos en el siguiente paso)
    console.log('Añadiendo al carrito:', {
      storage: selectedStorage,
      color: selectedColor,
    });
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
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Añadir al carrito
      </button>
    </div>
  );
}