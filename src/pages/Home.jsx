import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardCharacter from "../components/CardCharacter.jsx";
import CardPlanetas from "../components/CardPlanetas.jsx";
import React, { useEffect, useState } from "react";

export const Home = () => {
const[personajes,setPersonajes]=useState([]);

const[planetas,setPlanetas]=useState([]);

async function informacion(){
try {
			let response = await fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json', { method: 'GET' })
	

			let data = await response.json()
			setPersonajes(data)
            console.log(data)
		} 
		catch (error) {
			console.log(error);
			return error;
		}
	}	
async function informacionPlanetas(){
try {
			let response = await fetch('https://www.swapi.tech/api/planets', { method: 'GET' })
			
			let data = await response.json()
			setPlanetas(data.results)
            console.log(data.results)
		} 
		catch (error) {
			console.log(error);
			return error;
		}
	}	

	



useEffect(()=>{
	informacion()
	informacionPlanetas()
},[])


  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
			<CardCharacter personajes={personajes}/>
			<h1>Planetas</h1>
			<CardPlanetas planetas={planetas}/>
		</div>
	);
}
