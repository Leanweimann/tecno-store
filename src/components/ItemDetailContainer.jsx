import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    getProductById(Number(id))
      .then((data) => setProduct(data))
      .catch(() => setError(true))
  }, [id])

  if (error) {
    return <p className="cargando">Producto no encontrado.</p>
  }

  if (!product) {
    return <p className="cargando">Cargando detalle...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
