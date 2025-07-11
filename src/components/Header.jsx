import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <-- Importamos el hook
import './Header.css';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="app-header">
      <div className="header-logo">
        <Link to="/">TiendaMóvil</Link>
      </div>
      <div className="header-nav">
      </div>
      <div className="header-cart">
        <span>Carrito: {cartCount} items</span>
      </div>
    </header>
  );
}