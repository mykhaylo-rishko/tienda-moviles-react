import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.css';

export default function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav className="breadcrumbs-nav">
      <Link to="/">Inicio</Link>
      {location.pathname.startsWith('/product/') && (
        <span> / Detalle del Producto</span>
      )}
    </nav>
  );
}