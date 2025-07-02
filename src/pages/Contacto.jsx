function Contacto() {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Contacto</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="correo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;





