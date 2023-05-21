import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CommandesParClientComponent(props) {


    const [idClient, setIdClient] = useState(props.idClient);

    const [commandes, setCommandes] = useState([]);


    useEffect(() => {
        setIdClient(props.idClient);
        console.log(idClient);
        console.log(typeof(idClient));
        fetch(`http://localhost:8080/pfobs/commandesapi/findbyclient/${idClient}`).then((res) => res.json()).then(data => setCommandes(data));
    }, [])
 

     return (
        <>


            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Commandes passées : </h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Détail</th>
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
                                                <td>{commandes && commande.prixTotal} €</td>

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




        </>
    )
}

export default CommandesParClientComponent