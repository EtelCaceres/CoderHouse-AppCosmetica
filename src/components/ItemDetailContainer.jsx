import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/productos";

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);

        getProductoPorId(id).then((res) => {
            setProducto(res);
            setCargando(false);
        });
    }, [id]);

    if (cargando) {
        return <p className="container mt-5">Cargando detalle...</p>;
    }

    if (!producto) {
        return <p className="container mt-5">Producto no encontrado</p>;
    }

    return (
        <div className="container mt-5">
            <h2>{producto.nombre}</h2>
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={producto.imagen} className="img-fluid" alt={producto.nombre} />
                </div>
                <div className="col-md-8">
                    <p>{producto.descripcion}</p>
                    <p className="fw-bold">${producto.precio}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
