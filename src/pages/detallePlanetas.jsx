import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function DetallesPlanetas() {
  const { uid } = useParams();
  const [planeta, setPlaneta] = useState(null);

  useEffect(() => {
    async function fetchPlaneta() {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
        const data = await response.json();
        setPlaneta(data.result.properties);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlaneta();
  }, [uid]);

  if (!planeta) {
    return <p>Cargando planeta...</p>;
  }

  return (
    <div className="card-d container">
      <Link to="/" className="link-detalle">
        <div className="card-detallesP">
          <div className="imagen">
            <img src="https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg" className="imagenPlaneta" alt={planeta.name} />
          </div>

          <div className="col-md-8">
            <div className="card-body-d">
              <h5 className="card-title">Nombre: {planeta.name}</h5>
              <p className="card-text">Clima: {planeta.climate}</p>
              <p className="card-text">Terreno: {planeta.terrain}</p>
              <p className="card-text">Diámetro: {planeta.diameter}</p>
              <p className="card-text">Población: {planeta.population}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DetallesPlanetas;