import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
import useGlobalReducer from "../hooks/useGlobalReducer";
export const Navbar = () => {
const {store, dispatch}=useGlobalReducer()
	return (
		<nav className="navbar navbar-light">
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} style={{ width: "120px" }} alt="logo" />
				</Link>
				<div className="dropdown">
					<button className="bottonFavoritos btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos: ({store.favoritos.length})
					</button>
				
					<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2 ">

					{store.favoritos.map((item, index)=>(
						<li className="liFavoritos" key={index}>{item.name} <i className="fa-regular fa-trash-can" onClick={()=> dispatch({type:'delete_favorito', payload: index})}></i> </li>
					))}

					</ul>
					
				</div>
			</div>
		</nav>
	);
};