import React, { useEffect, useState, useCallback } from "react"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ClientVue() {

    const { id } = useParams();


    const navigate = useNavigate();

    const [client, setClient] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8080/pfobs/clientsapi/${id}`).then((res) => res.json()).then(data => setClient(data));
    }, [])



    function updateClient(id) {
        navigate('/pfobs/updateclient/'+id);
    }

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    function deleteClient(id) {

        fetch(`http://localhost:8080/pfobs/clientsapi/${id}`, requestOptions)
            .then(navigate('/pfobs/clients'));
    }


    return (
        <>

            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Client demandé : </h2>
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

                                    <tr>


                                        <td>{client && client.id}</td>
                                        <td>{client && client.username}</td>
                                        <td>{client && client.password}</td>
                                        <td>{client && client.nom}</td>
                                        <td>{client && client.prenom}</td>
                                        <td>{client && client.coordonnees}</td>

                                        <td><button type="button" className="btn btn-warning" onClick={() => updateClient(client.id)}>Modifier</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteClient(client.id)}>Supprimer</button></td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div >
                </div>

            </div >

        </>
    )
}

export default ClientVue