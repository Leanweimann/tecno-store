import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">Tecno Store</Link>
      </h2>
      <ul className="categorias">
        <li><NavLink to="/category/celulares">Celulares</NavLink></li>
        <li><NavLink to="/category/notebooks">Notebooks</NavLink></li>
        <li><NavLink to="/category/auriculares">Auriculares</NavLink></li>
        <li><NavLink to="/category/accesorios">Accesorios</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar
