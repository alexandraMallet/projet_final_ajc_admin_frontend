
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"

const ClientUpdate = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [client, setClient] = useState({});
    const [isformsubmit, setIsFormSubmit] = useState(false);
    useEffect(() => {


        fetch(`http://localhost:8080/pfobs/clientsapi/${id}`).then((res) => res.json()).then(data => setClient(data));
        setIsFormSubmit(false);
    }, [])

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/pfobs/clientsapi', requestOptions)
            .then(setIsFormSubmit(true))
            .then(navigate('/pfobs/clients'));

    }
    return (
        <>

            <div className="container">
                <form onSubmit={handleSubmit}>

                    <h2>Modifier le client {client.id} : </h2>

                    <div>
                        UTILISATEUR :
                        <input
                            className="input"
                            type="text"
                            name="username"
                            onChange={(e) => setClient({ ...client, 'username': e.target.value })}
                            value={client && client.username}
                            required
                        />
                    </div>
                    <div>
                        MOT DE PASSE :
                        <input
                            className="input"
                            type="password"
                            name="password"
                            onChange={(e) => setClient({ ...client, 'password': e.target.value })}
                            value={client && client.password}
                            required
                        />
                    </div>
                    <div>
                        NOM :
                        <input
                            className="input"
                            type="text"
                            name="nom"
                            onChange={(e) => setClient({ ...client, 'nom': e.target.value })}
                            value={client && client.nom}
                            required
                        />
                    </div>
                    <div>
                        PRENOM :
                        <input
                            className="input"
                            type="text"
                            name="prenom"
                            onChange={(e) => setClient({ ...client, 'prenom': e.target.value })}
                            value={client && client.prenom}
                            required
                        />
                    </div>
                    <div>
                        COORDONNEES :
                        <input
                            className="input"
                            type="text"
                            name="coordonnees"
                            onChange={(e) => setClient({ ...client, 'coordonnees': e.target.value })}
                            value={client && client.coordonnees}
                            required
                        />

                    </div>

                    <button type="submit" className="btn btn-info input">Modifier</button>

                </form>

            </div>

        </>
    )
}
export default ClientUpdate


