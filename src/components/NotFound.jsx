import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <h2>Error 404</h2>
      <p>La página que buscás no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFound
