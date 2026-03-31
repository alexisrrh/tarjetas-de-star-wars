import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


function CardCharacter() {
const{store, dispatch}=useGlobalReducer()

  return (
    <div className="container-fluid">

      <ul className="listaPersonaje">{store.personajes.map((item) => (
        <li className="li" key={item.id}>
          <div className="card-list">
            <img src={item.image} className="card-img" alt={item.name}
              onError={(e) => { e.currentTarget.src = "https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg" }} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="text"><strong>Planeta Natal:</strong> {item.homeworld}</p>
              <p className="text"><strong>Genero:</strong> {item.gender}</p>
              <p className="text"><strong>Altura:</strong> {item.height}</p>
              <div className="divBotton">
                <Link to={`/detalles/personajes/${item.id}`}>
                  <button className="botonDetalles">Ver detalles</button>
                </Link>
              <button className="botonCorazon" onClick={()=>dispatch({type:"set_favoritos", payload:item})}> <i className="fa-regular fa-heart"></i></button>
              </div>

            </div>
          </div>
        </li>))}</ul>
    </div>)

}

export default CardCharacter;