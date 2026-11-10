import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true)
      const data = await getProducts()

      if (id) {
        setItems(data.filter((product) => product.category === id))
      } else {
        setItems(data)
      }

      setLoading(false)
    }

    cargarProductos()
  }, [id])

  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={items} />}
    </main>
  )
}

export default ItemListContainer
