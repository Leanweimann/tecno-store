function Item({ product }) {
  return (
    <div className="item">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="precio">${product.price}</p>
    </div>
  )
}

export default Item
