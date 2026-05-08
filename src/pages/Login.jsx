import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import { login } from "../services/auth.services";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
export default function Login() {
    const { store, dispatch } = useGlobalReducer();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


     const handleSubmit = async (e) => {
        e.preventDefault();
        let usuario = await login(email, password);
        if (usuario.msg != "login exitoso") {
           alert("usuario o contraseña incorrectos");
        } 
        localStorage.setItem("token", usuario.access_token);
        localStorage.setItem("user", email);
        navigate("/");
        }
      

     


    return (
     <div className="container d-flex justify-content-center align-items-center vh-100">

    <div
        className="card bg-dark text-white p-4 shadow-lg"
        style={{
            width: "350px",
            borderRadius: "20px",
            border: "1px solid #333"
        }}
    >

        <h1 className="text-center mb-4">
            Login
        </h1>

        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <input
                    type="email"
                    className="form-control bg-white text-black border-secondary"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <input
                    type="password"
                    className="form-control bg-white text-black border-secondary"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="btn btn-warning w-100 fw-bold mb-3"
            >
                Login
            </button>

            <button
                type="button"
                className="btn btn-outline-light w-100"
                onClick={() => navigate('/registro')}
            >
                Registrarte
            </button>

        </form>

    </div>

</div>
    );
}