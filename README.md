# Tienda React - Taller JavaScript aplicado a React

Aplicación web desarrollada con **React** y **Vite** como parte de la formación en **Análisis y Desarrollo de Software (ADSO) — Ficha 3409609 (SENA)**.

## Funcionalidades principales

- **Renderizado dinámico:** Listado de productos mediante `.map()` utilizando el componente reutilizable `ProductoCard`.
- **Filtrado de inventario:** Muestra todos los productos y, en una segunda sección, solo los que tienen stock usando `.filter()`.
- **Estado y valor del inventario:** Indica si hay productos agotados con `.some()` y calcula el valor total del inventario con `.reduce()`.
- **Búsqueda por identificador:** `buscarProducto(id)` localiza un producto mediante `.find()` en `practica-js.js`.
- **Interfaz responsiva:** Diseño en cuadrícula con CSS Grid, tipografía limpia y efectos visuales al pasar el cursor.

## Tecnologías utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3**
- **Git y GitHub**

## Estructura del proyecto

```text
tienda-react/
├── public/
├── src/
│   ├── components/
│   │   └── ProductoCard.jsx
│   ├── data/
│   │   └── productos.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md