import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardCharacter from "../components/CardCharacter.jsx";
import CardPlanetas from "../components/CardPlanetas.jsx";
import React, { useEffect} from "react";
import {Private} from "../services/auth.services.js";

export const Home = () => {
	
	const {store, dispatch} = useGlobalReducer ()


	async function informacion() {
		try {
			let response = await fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json', { method: 'GET' })

				if(response.ok){
			let data = await response.json()
		dispatch ({type: 'set_personajes', payload: data });
				}
				else {
					console.log(response.status)
				}
		
	
	
			let responseP = await fetch('https://www.swapi.tech/api/planets', { method: 'GET' })
				if(responseP.ok){
			let dataP = await responseP.json()
			dispatch({type: 'set_planetas', payload:dataP.results})
			}
			else{
				console.log(responseP.status)
			}
		}
		catch (error) {
			console.log("Error",error);
		}
		
	}





	useEffect(() => {
		informacion()
	Private()
	}, [])



	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
			<CardCharacter  />
			<h1>Planetas</h1>
			<CardPlanetas />
		</div>
	);
}
