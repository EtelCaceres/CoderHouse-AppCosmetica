import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductos } from "../data/productos";

function ItemListContainer({ saludo }) {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);

    getProductos().then((respuesta) => {
      if (categoriaId) {
        const filtrados = respuesta.filter(prod => prod.categoria === categoriaId);
        setProductos(filtrados);
      } else {
        setProductos(respuesta);
      }
      setCargando(false);
    });
  }, [categoriaId]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{saludo}</h2>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="row">
          {productos.map((prod) => (
            <div key={prod.id} className="col-md-4 mb-4">
              <Link to={`/item/${prod.id}`} className="text-decoration-none text-dark">
                <div className="card h-100">
                  <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">{prod.descripcion}</p>
                    <p className="card-text fw-bold">${prod.precio}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
















