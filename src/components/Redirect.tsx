import React from "react"
import { useNavigate } from "react-router-dom";

function VersLogin() {

    const navigate = useNavigate();
    function versLogin() {
        navigate('/pfobs/login');
    }

    return (

        <>

            <div className="container home-container redirect-container">
                <p className="nomimg input">Contenu inaccessible hors connexion.</p>

                <div className="btn-login input">
                    <button type="button" className="btn btn-info" onClick={versLogin}>Me connecter</button>
                </div>

            </div>

        </>
    )
}

export default VersLogin