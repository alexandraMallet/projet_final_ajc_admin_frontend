import React from "react"
import { useNavigate } from "react-router-dom";

function VersLogin() {

    const navigate = useNavigate();
    function versLogin(){
        navigate('/pfobs/login');
    }

    return (
        <>
            Contenu inaccessible hors connexion.

            <div className="btn-login">
                    <button type="button" className="btn btn-success" onClick={versLogin}>Me connecter</button>
                </div>
        
        </>
    )
}

export default VersLogin