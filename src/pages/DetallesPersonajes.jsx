
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";




function DetallesPersonajes() {

const{ store, dispatch}= useGlobalReducer();
const {id}= useParams();

const item = store.personajes.find(item => item.id === parseInt(id))
 if (!item) {
    return <p>Cargando personaje...</p>;}

  return (
<div className="card-d container">
  <div className="card-detalles">

    <Link to="/" className="link-detalle">
      <div className="imagenPersonaje">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="col-md-8">
        <div className="card-body-d">
          <h5 className="card-title">Nombre: {item.name}</h5>
          <p className="card-text">Altura: {item.height}</p>
          <p className="card-text">Genero: {item.gender}</p>
          <p className="card-text">Planeta de Origen: {item.homeworld}</p>
          <p className="card-text">Especie: {item.species}</p>
          <p className="card-text">Color de ojos: {item.eyeColor}</p>
          <p className="card-text">Color de Pelo: {item.hairColor}</p>
          <p className="card-text">
            Afiliaciones: {item.affiliations?.join(", ")}
          </p>

          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </Link>

  </div>
</div>
  )
}








export default DetallesPersonajes;