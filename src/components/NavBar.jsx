import { useState } from 'react';
import { Link } from 'react-router-dom'
import { datos } from '../datos'

function NavBar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-morado-700" href="#">
          Lenguajes De Programacion
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" >
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={toggleNav}
              >
                Lenguajes
              </a>
              <ul className={`dropdown-menu${isNavOpen ? ' show' : ''}`}>
                {datos.map((item) => <li key={item.id} >
                  <Link to={`/lenguaje/${item.id}`} className="dropdown-item" >
                    {item.name}
                  </Link>
                </li>)}
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link" >
                Sobre Mi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
