import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"


function CardPlanetas({planetas}){






    return(
        <div className="container-fluid">
            <ul className="listaPlanetas">{planetas.map((item=>(
                <li className="liPlanetas" key={item.uid}>
        <div className="card" style={{width: 200}}>
  <img src="https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg" className="card-img" alt={item.name}/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <div className="divBotton">
<Link to={`/detalles/${item.id}`}>
  <button className="botonDetalles">ver detalles</button> 
  </Link>
     <i class="fa-regular fa-heart"></i>
</div>
  </div>
</div>
</li>)))}
</ul>
</div>
    )
}

export default CardPlanetas;