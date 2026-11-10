import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <div className="item">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="precio">${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
