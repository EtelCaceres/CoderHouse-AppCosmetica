import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="bg-light shadow-sm fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center py-3 px-4">
        {/* Título / Logo */}
        <h1 className="h4 m-0 text-primary">Etelbea Cosmética</h1>

        {/* Navegación */}
        <nav className="d-flex gap-4">
          <Link to="/" className="text-decoration-none text-dark">Inicio</Link>
          <Link to="/category/maquillaje" className="text-decoration-none text-dark">Maquillaje</Link>
          <Link to="/category/skincare" className="text-decoration-none text-dark">Skincare</Link>
          <Link to="/contacto" className="text-decoration-none text-dark">Contacto</Link>
        </nav>

        {/* Carrito */}
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;





















