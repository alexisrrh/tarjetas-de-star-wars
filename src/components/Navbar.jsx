import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
export const Navbar = () => {

	return (
		<nav className="navbar navbar-light">
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} style={{ width: "100px" }}  alt="logo"/>
				</Link>
				<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   Favoritos
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item active" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
			</div>
		</nav>
	);
};