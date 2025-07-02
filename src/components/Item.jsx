function Item({ producto }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="fw-semibold">${producto.precio}</p>

                    {/* Botones de cantidad */}
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                        <button className="btn btn-outline-secondary">-</button>
                        <span className="fw-bold">1</span>
                        <button className="btn btn-outline-secondary">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;




