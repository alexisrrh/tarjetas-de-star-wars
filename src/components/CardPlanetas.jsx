import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

function CardPlanetas() {
const{store, dispatch}= useGlobalReducer()





    return (
        <div className="container-fluid">
            <ul className="listaPlanetas">{store.planetas.map((item => (
                <li className="liPlanetas" key={item.uid}>
                    <div className="card" style={{ width: 200 }}>
                        <img src="https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg" className="card-img" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="divBotton">
                                <Link to={`/detalles/planetas/${item.uid}`}>
                                    <button className="botonDetalles">ver detalles</button>
                                </Link>
                                <button className="botonCorazon"> <i className="fa-regular fa-heart" onClick={()=>dispatch({type: 'set_favoritos', payload: item})}></i></button>
                               
                            </div>
                        </div>
                    </div>
                </li>)))}
            </ul>
        </div>
    )
}

export default CardPlanetas;