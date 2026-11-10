# Tecno Store

E-commerce de productos de tecnología. Proyecto final de la diplomatura de React.

## Tecnologías

- React
- Vite
- JavaScript
- React Router

## Navegación

La aplicación usa React Router para navegar entre páginas sin recargar. Las rutas son:

- `/`: inicio, muestra todos los productos.
- `/category/:id`: muestra solo los productos de una categoría (por ejemplo `/category/celulares`).
- `/item/:id`: muestra el detalle de un producto (por ejemplo `/item/1`).
- Cualquier otra dirección muestra una página de error 404.

La Navbar y el Footer se ven en todas las páginas porque están en el componente Layout, que envuelve al resto de las rutas.

## Componentes

- **Layout**: estructura general de la página. Muestra la Navbar, el contenido de la ruta actual y el Footer.
- **Navbar**: barra de navegación con el nombre de la tienda, los links a las categorías y el carrito.
- **CartWidget**: ícono del carrito con la cantidad de productos (por ahora un número fijo). Se usa dentro de la Navbar.
- **Footer**: pie de página.
- **ItemListContainer**: pide los productos, los filtra según la categoría de la URL y se los pasa a ItemList.
- **ItemList**: recibe los productos por props y los recorre con `.map()` para mostrar un Item por cada uno.
- **Item**: card con el resumen de un producto y un link a su detalle.
- **ItemDetailContainer**: toma el id de la URL, busca el producto con `getProductById` y se lo pasa a ItemDetail.
- **ItemDetail**: muestra el detalle completo del producto: imagen, nombre, categoría, descripción, precio y stock.
- **ItemCount**: contador para elegir la cantidad. Recibe el stock por props, no lo supera y no baja de cero.
- **NotFound**: página de error 404 para direcciones que no existen.

## Carga de datos simulada

Los productos todavía no vienen de una base de datos real. Están en el archivo `src/mock/asyncMock.js`, que tiene un array de productos y la función `getProducts`.

Esa función devuelve una promesa que usa `setTimeout` para entregar los productos después de 2 segundos, imitando la demora de un servidor.

En `ItemListContainer` se llama a `getProducts` dentro de un `useEffect` con `async/await`, y el resultado se guarda en el estado con `useState`. Mientras se espera, se muestra el texto "Cargando productos...".

Para el detalle se usa la función `getProductById`, que recibe un id, busca ese producto en el array y devuelve una promesa. Si el producto no existe, la promesa se rechaza con un error.

## Instalación

1. Clonar el repositorio
2. Entrar a la carpeta del proyecto
3. Instalar las dependencias:

```
npm install
```

4. Ejecutar el proyecto:

```
npm run dev
```
