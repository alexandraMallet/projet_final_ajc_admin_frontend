import { useNavigate } from "react-router-dom";


export default function Error404() {

    const navigate = useNavigate();

    function versHome() {
        navigate('/pfobs');
    }


    return (
        <div className="container home-container redirect-container">
            <h3>La page que vous demandez n'existe pas.</h3>

            <button type="button" className="btn btn-info" onClick={versHome}>Retour à l'accueil</button>
        </div>
    )
}