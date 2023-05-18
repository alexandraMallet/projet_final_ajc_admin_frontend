import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";

function ClientsVue() {

    const navigate = useNavigate();

    const [clients, setClients] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/pfobs/clientsapi').then((res) => res.json()).then(data => setClients(data));
    }, [])


    function versClient(id){
        navigate('/pfobs/client/'+id);
    }


    return (
        <>

            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Clients</h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>nom d'utilisateur</th>
                                        <th>mot de passe</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Coordonnées</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client, index) => {
                                        return (
                                            <tr key={index}>


                                                <td>{clients && client.id}</td>
                                                <td>{clients && client.username}</td>
                                                <td>{clients && client.password}</td>
                                                <td>{clients && client.nom}</td>
                                                <td>{clients && client.prenom}</td>
                                                <td>{clients && client.coordonnees}</td>

                                            <td><button className="btn btn-info" onClick={() => versClient(client.id)}>Modifier ou supprimer</button></td>

                                            </tr>

                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div >
                </div>

            </div >

            <div className="d-flex justify-content-around">
                <a href="/pfobs/clientcreate">
                    <button type="submit" className="btn btn-primary">Créer un client test</button>
                </a>
          
            </div>        </>
    )
}

export default ClientsVue