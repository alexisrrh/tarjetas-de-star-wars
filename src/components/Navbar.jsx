import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png"
import useGlobalReducer from "../hooks/useGlobalReducer";
import	{usenavigate} from "react-router-dom/dist/umd/react-router-dom.development";


export const Navbar = () => {
const {store, dispatch}=useGlobalReducer()
	const navigate = useNavigate();
	 const user = localStorage.getItem("user");
	return (
		<nav className="navbar navbar-light">
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} style={{ width: "140px" }} alt="logo" />
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
					 {user ? (

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}
                    >

                        <div
                            style={{
                                width: "80px",
                                height: "35px",
                                borderRadius: "50%",
                                background: "gold",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                fontWeight: "bold"
                            }}
                        >
                            {user.slice(0,4).toUpperCase()}
                        </div>

                        <span>{user}</span>
					</div>

                ) : (

                    <Link to="/login">
                        Iniciar Sesion
                    </Link>

                )}
				</div>
			</div>
		</nav>
	);
};