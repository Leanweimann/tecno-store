const products = [
  {
    id: 1,
    name: 'Celular Galaxy A55',
    price: 650000,
    category: 'celulares',
    img: 'https://placehold.co/300x200?text=Celular',
    stock: 10,
    description: 'Celular con pantalla de 6.6 pulgadas y 128 GB.',
  },
  {
    id: 2,
    name: 'Notebook Lenovo 15',
    price: 980000,
    category: 'notebooks',
    img: 'https://placehold.co/300x200?text=Notebook',
    stock: 5,
    description: 'Notebook de 15 pulgadas con 8 GB de RAM.',
  },
  {
    id: 3,
    name: 'Auriculares Bluetooth',
    price: 45000,
    category: 'auriculares',
    img: 'https://placehold.co/300x200?text=Auriculares',
    stock: 20,
    description: 'Auriculares inalámbricos con estuche de carga.',
  },
  {
    id: 4,
    name: 'Mouse inalámbrico',
    price: 18000,
    category: 'accesorios',
    img: 'https://placehold.co/300x200?text=Mouse',
    stock: 30,
    description: 'Mouse óptico inalámbrico con receptor USB.',
  },
  {
    id: 5,
    name: 'Teclado mecánico',
    price: 60000,
    category: 'accesorios',
    img: 'https://placehold.co/300x200?text=Teclado',
    stock: 12,
    description: 'Teclado mecánico con luces y distribución en español.',
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}
