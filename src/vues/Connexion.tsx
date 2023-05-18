import React, {useState} from "react"
import { useNavigate } from 'react-router-dom';


function Connexion() {


    if (sessionStorage) {
        sessionStorage.clear();
    }

    const navigate = useNavigate();

    function versHome() {
        navigate('/pfobs');
    }

    const [login, setLogin] = useState({});


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
    };

    async function seConnecter(e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/pfobs/admin/login', requestOptions);
            const admin = await response.json();
            console.log(admin);
            sessionStorage.setItem("admin", JSON.stringify(admin));
            versHome();
        }
        
        catch {
            alert("identifiants incorrects");
        }

    }

    return (

        <>

            <div className="container mt-3">
                <form onSubmit={seConnecter}>
                    <div className="mb-3">
                        <label htmlFor="username">utilisateur :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="votre nom d'utilisateur"
                            name="username"
                            onChange={(e) => setLogin({ ...login, 'username': e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">mot de passe : </label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="votre mot de passe"
                            name="pswd"
                            onChange={(e) => setLogin({ ...login, 'password': e.target.value })}
                        />
                    </div>

                    <button type="submit" className="btn btn-info">Me connecter</button>
                </form>
            </div>

        </>

    )
}

export default Connexion