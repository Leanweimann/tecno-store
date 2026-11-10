import { useState, useEffect } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await getProducts()
      setItems(data)
    }

    cargarProductos()
  }, [])

  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      {items.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={items} />
      )}
    </main>
  )
}

export default ItemListContainer
