import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CommandeComponent() {



    const { id } = useParams();


    const navigate = useNavigate();

    const [commande, setCommande] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8080/pfobs/commandesapi/${id}`).then((res) => res.json()).then(data => setCommande(data));
    }, [])



    function updateCommande(id) {
        navigate('/pfobs/updatecommande/' + id);
    }

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    function deleteCommande(id) {

        fetch(`http://localhost:8080/pfobs/commandesapi/${id}`, requestOptions)
            .then(navigate('/pfobs/commandes'));
    }


    return (
        <>


            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Commande demandé : </h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Détail</th>
                                        <th>Client ID</th>
                                        <th>Prix total</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className="bold">{commande && commande.id}</td>
                                        <td>{commande && commande.date}</td>
                                        <td>{commande && commande.details}</td>
                                        <td>{commande && commande.idClient}</td>
                                        <td>{commande && commande.prixTotal} €</td>

                                        <td><button type="button" className="btn btn-warning" onClick={() => updateCommande(commande.id)}>Modifier</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteCommande(commande.id)}>Supprimer</button></td>

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

export default CommandeComponent