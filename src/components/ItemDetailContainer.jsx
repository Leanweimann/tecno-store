import { useState, useEffect } from 'react'
import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ productId }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
  }, [productId])

  if (!product) {
    return <p className="cargando">Cargando detalle...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
