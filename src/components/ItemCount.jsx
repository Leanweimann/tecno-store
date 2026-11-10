import { useState } from 'react'

function ItemCount({ stock }) {
  const [count, setCount] = useState(0)

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count">
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount
