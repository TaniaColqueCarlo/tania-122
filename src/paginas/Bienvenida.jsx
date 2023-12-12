import { Link } from "react-router-dom";
import SectionLenguajes from "../components/SectionLenguajes";
import { datos } from '../datos';

function Bienvenida() {
  return (
    <main>
      <div className="container-fluid welcome-page bg-dark bg-fondo">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 text-center">
            <h1 className="fs-1 text-light text-bold">Lenguajes de Programación</h1>
            <p className="lead text-light">
              Bienvenido a nuestra plataforma, donde encontrarás información sobre diversos lenguajes de programación.
            </p>
            <Link to='/lenguaje/1' className="btn btn-primary btn-lg">
              Explorar
            </Link>
          </div>
        </div>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {datos.map((item, index) => (
              <button key={index} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {datos.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={item.urlImg} className="d-block w-100" alt={item.name} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <SectionLenguajes />
    </main>
  );
}

export default Bienvenida;
