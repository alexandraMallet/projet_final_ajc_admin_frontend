
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"

const CommandeUpdateComponent = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [commande, setCommande] = useState({});
    const [isformsubmit, setIsFormSubmit] = useState(false);
    useEffect(() => {


        fetch(`http://localhost:8080/pfobs/commandesapi/${id}`).then((res) => res.json()).then(data => setCommande(data));
        setIsFormSubmit(false);
        console.log(commande.date);

    }, [])

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commande)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/pfobs/commandesapi', requestOptions)
            .then(setIsFormSubmit(true))
            .then(navigate('/pfobs/commandes'));

    }
    return (
        <>

        {commande && commande.date &&
            <div className="container home-container redirect-container">
                <h2>Modifier le détail de la commande n° {commande.id} 
                <br/>du client n°{commande.idClient}
                {/* <br/> effectuée le {(commande.date && commande.date).split(" ")[0]} à {(commande.date && commande.date).split(" ")[1]} */}
                </h2>

                <form onSubmit={handleSubmit}>

                    <div>
                        Détail :
                        <input
                            className="input big-input"
                            type="text"
                            name="details"
                            onChange={(e) => setCommande({ ...commande, 'details': e.target.value })}
                            value={commande && commande.details}
                            required
                        />
                    </div>

                    <div>
                        PRIX TOTAL :
                        <input
                            className="input"
                            type="number"
                            name="prixTotal"
                            onChange={(e) => setCommande({ ...commande, 'prixTotal': e.target.value })}
                            value={commande.prixTotal}
                            required
                        />
                    </div>
                   

                    <button type="submit" className="btn btn-info">Modifier</button>

                </form>
            </div>
}

        </>
    )
}
export default CommandeUpdateComponent


