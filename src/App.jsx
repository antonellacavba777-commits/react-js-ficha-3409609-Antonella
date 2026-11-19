import ProductoCard from './components/productocard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>¿Hay productos agotados?: {hayAgotados ? 'Sí' : 'No'}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      <section aria-labelledby="todos-productos">
        <h2 id="todos-productos">Todos los productos</h2>
        <div className="productos">
          {productos.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section aria-labelledby="productos-disponibles">
        <h2 id="productos-disponibles">Productos disponibles</h2>
        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;