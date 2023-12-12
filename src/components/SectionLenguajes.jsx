import { Link } from 'react-router-dom'
import { datos } from '../datos'

function SectionLenguajes() {
  return (
    <section className=' p-5 bg-morado-900' >
      <div className='customGrid gap-3 container' >
        {
          datos.map((item) => (
            <div key={item.id} className="card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body bg-morado-600">
                <h5 className="card-title text-center">
                  {item.name}
                </h5>
                <img src={item.urlImg} alt="" width={300} />
                <p className="card-text">
                  {item.description}
                </p>
                <Link to={`/lenguaje/${item.id}`} className="btn btn-primary" >
                  Ver Mas
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SectionLenguajes