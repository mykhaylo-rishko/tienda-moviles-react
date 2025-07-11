import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-logo">
        <Link to="/">TiendaMóvil</Link>
      </div>
      <div className="header-nav">
      </div>
      <div className="header-cart">
        <span>Carrito: 0 items</span>
      </div>
    </header>
  );
}