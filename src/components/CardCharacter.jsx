import React from "react";
import { Link } from "react-router-dom";


function CardCharacter({personajes =[]}){
 
  
    return(
      <div className="container">
      
        <ul className="listaPersonaje">{personajes.map((item)=>(
          <li className="li" key={item.id}>
        <div className="card-list">
<img src={item.image} className="card-img" alt={item.name}
      onError={(e) => { e.currentTarget.src = "https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg"}} />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="text"><strong>Planeta Natal:</strong> {item.homeworld}</p>
    <p  className="text"><strong>Genero:</strong> {item.gender}</p>
    <p  className="text"><strong>Altura:</strong> {item.height}</p>
<div className="divBotton">
   <Link to={`/detalles/${item.id}`}>   
     <button className="botonDetalles">Ver detalles</button> 
     </Link>
      <i class="fa-regular fa-heart"></i>
     </div>

  </div>
</div>
 </li>))}</ul>
    </div>)
   
}

export default CardCharacter;