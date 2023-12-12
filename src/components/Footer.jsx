import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registro Exitoso')
  }

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Envíanos tus comentarios y consultas:</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h5>Enlaces</h5>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link" >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/lenguaje/1' className="nav-link" >
                    Lenguajes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className="nav-link" >
                    Sobre Mi
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <h5>Redes Sociales</h5>
            <div className="d-flex">
              <SocialIcon url="URL_DE_TU_REDSOCIAL" className="mr-2" />
              <SocialIcon url="URL_DE_TU_REDSOCIAL" className="mr-2" />
              {/* Agrega más íconos según tus necesidades */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
