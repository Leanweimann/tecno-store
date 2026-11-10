import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} />
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>Categoría: {product.category}</p>
        <p>{product.description}</p>
        <p className="precio">${product.price}</p>
        <p>Stock disponible: {product.stock}</p>
        <ItemCount stock={product.stock} />
      </div>
    </div>
  )
}

export default ItemDetail
