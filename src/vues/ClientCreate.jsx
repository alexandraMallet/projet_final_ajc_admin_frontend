import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

const ClientCreate = () => {

    const navigate = useNavigate();


    const [client, setClient] = useState({});

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/pfobs/clientsapi', requestOptions)
            .then(navigate('/pfobs/clients'));
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <div>
                        UTILISATEUR :
                        <input
                            className="input"
                            type="text"
                            name="username"
                            onChange={(e) => setClient({ ...client, 'username': e.target.value })}
                        />
                    </div>
                    <div>
                        MOT DE PASSE :
                        <input
                            className="input"
                            type="password"
                            name="password"
                            onChange={(e) => setClient({ ...client, 'password': e.target.value })}
                        />
                    </div>
                    <div>
                        NOM :
                        <input
                            className="input"
                            type="text"
                            name="nom"
                            onChange={(e) => setClient({ ...client, 'nom': e.target.value })}
                        />
                    </div>
                    <div>
                        PRENOM :
                        <input
                            className="input"
                            type="text"
                            name="prenom"
                            onChange={(e) => setClient({ ...client, 'prenom': e.target.value })}
                        />
                    </div>
                    <div>
                        COORDONNEES :
                        <input
                            className="input"
                            type="text"
                            name="coordonnees"
                            onChange={(e) => setClient({ ...client, 'coordonnees': e.target.value })}
                        />

                    </div>

                    <button type="submit" className="btn btn-info input">Créer le client-test</button>

                </form>
            </div>
        </>
    )
}
export default ClientCreate