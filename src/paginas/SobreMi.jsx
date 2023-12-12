import foto from '../img/foto.jpeg'

function SobreMi() {
  return (
    <section className="bg-morado-900 text-light py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fs-1" >Sobre Mí</h2>
          <div className='foto-contenedor' >
            <img src={foto} width={300} alt="Foto de Perfil" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <h3>Mi Nombre</h3>
              <p>Tania Colque Carlo </p>
            </div>
            <div className="mb-3">
              <h3>Descripción</h3>
              <p>
                Como estudiante de informática en mi tercer semestre, encuentro una profunda satisfacción en explorar el fascinante mundo de la tecnología y la informática. En mi búsqueda de conocimiento, me sumerjo en conceptos avanzados y prácticas innovadoras que amplían mi comprensión de la disciplina.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <h3>Habilidades</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
