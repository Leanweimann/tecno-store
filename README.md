# Tecno Store

E-commerce de productos de tecnología. Proyecto final de la diplomatura de React.

## Tecnologías

- React
- Vite
- JavaScript

## Componentes

- **Navbar**: barra de navegación con el nombre de la tienda, las categorías de productos y el carrito.
- **CartWidget**: ícono del carrito con la cantidad de productos (por ahora un número fijo). Se usa dentro de la Navbar.
- **ItemListContainer**: contenedor principal. Pide los productos al montarse, los guarda en el estado `items` y se los pasa a ItemList.
- **ItemList**: recibe los productos por props y los recorre con `.map()` para mostrar un Item por cada uno.
- **Item**: card que muestra la imagen, el nombre, la descripción y el precio de un producto.

## Carga de datos simulada

Los productos todavía no vienen de una base de datos real. Están en el archivo `src/mock/asyncMock.js`, que tiene un array de productos y la función `getProducts`.

Esa función devuelve una promesa que usa `setTimeout` para entregar los productos después de 2 segundos, imitando la demora de un servidor.

En `ItemListContainer` se llama a `getProducts` dentro de un `useEffect` con `async/await`, y el resultado se guarda en el estado con `useState`. Mientras se espera, se muestra el texto "Cargando productos...".

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
