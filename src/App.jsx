import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer greeting="¡Bienvenidos a Tecno Store!" />} />
          <Route path="category/:id" element={<ItemListContainer greeting="¡Bienvenidos a Tecno Store!" />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
