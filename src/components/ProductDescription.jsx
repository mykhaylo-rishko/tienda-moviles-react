import './ProductDescription.css';

export default function ProductDescription({ product }) {
  const specs = [
    { label: 'Marca', value: product.brand },
    { label: 'Modelo', value: product.model },
    { label: 'Precio', value: product.price ? `${product.price} €` : 'No disponible' },
    { label: 'CPU', value: product.cpu },
    { label: 'RAM', value: product.ram },
    { label: 'Sistema Operativo', value: product.os },
    { label: 'Resolución', value: product.displayResolution },
    { label: 'Batería', value: product.battery },
    { label: 'Cámaras', value: `${product.primaryCamera} (Principal)` },
    { label: 'Dimensiones', value: product.dimentions },
    { label: 'Peso', value: `${product.weight} g` },
  ];

  return (
    <div className="product-description">
      <h3>Especificaciones</h3>
      <ul className="spec-list">
        {specs.map(spec => (
          spec.value && <li key={spec.label}><strong>{spec.label}:</strong> {spec.value}</li>
        ))}
      </ul>
    </div>
  );
}