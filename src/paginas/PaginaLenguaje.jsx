import { useParams } from 'react-router-dom';
import { datos } from '../datos';

function PaginaLenguaje() {

  // obtener la direccion de la pagina
  const { id } = useParams();
  // metodo de javascript para encontrar el primer objeto que coincida
  const lenguaje = datos.find((item) => item.id === parseInt(id));

  return (
    <section className="text-light py-5 bg-morado-800">
      <div className="container">
        <div className="mb-4">
          <h2 className='text-center fs-1' >{lenguaje.name}</h2>
          <p className='text-center fs-5' >{lenguaje.description}</p>
        </div>
        <div className='d-flex' >
          <div className='mx-auto' >
            <iframe
              width="560"
              height="315"
              src={lenguaje.mediaLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen // Cambié allowfullscreen a allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='py-4' >
          <a href={lenguaje.documentationLink} className='btn btn-danger' >
            Documentacion Oficial
          </a>
        </div>
        <div className="mb-4">
          <h3 className='pb-3' >Historia</h3>
          <p className='fs-5 bg-morado-900 p-4' >{lenguaje.history}</p>
        </div>
        <div>
          <h3 className='pb-3' >Usos del lenguaje {lenguaje.name}</h3>
          <p className='fs-5 bg-morado-900 p-4' >{lenguaje.usageDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default PaginaLenguaje;
