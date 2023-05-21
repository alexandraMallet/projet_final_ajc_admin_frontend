import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import '../styles/ArticlesVue.css'

function CommandesComponent() {

    const navigate = useNavigate();

    const [commandes, setCommandes] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/pfobs/commandesapi').then((res) => res.json()).then(data => setCommandes(data));
    }, [])


    function versCommande(id){
        navigate('/pfobs/commande/'+id);
    }


    return (
        <>

            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Commandes</h2>
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
                                    {commandes.map((commande, index) => {
                                        return (
                                            <tr key={index}>


                                                <td className="bold">{commandes && commande.id}</td>
                                                <td>{commandes && commande.date}</td>
                                                <td>{commandes && commande.details}</td>
                                                <td>{commandes && commande.idClient}</td>
                                                <td>{commandes && commande.prixTotal} €</td>

                                            <td><button className="btn btn-info" onClick={() => versCommande(commande.id)}>Modifier ou supprimer</button></td>

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

            {/* <div className="d-flex justify-content-around">
                <a href="/pfobs/commandecreate">
                    <button type="submit" className="btn btn-primary">Nouvel
                        commande</button>
                </a>
          
            </div>         */}
            </>
    )
}

export default CommandesComponent