import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Tecno Store</h2>
      <ul className="categorias">
        <li><a href="#">Celulares</a></li>
        <li><a href="#">Notebooks</a></li>
        <li><a href="#">Auriculares</a></li>
        <li><a href="#">Celulares</a></li>
        <li><a href="#">Accesorios</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar
