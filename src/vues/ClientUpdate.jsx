
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"

const ClientUpdate = ()=>{
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
    return(
        <>
          <form onSubmit={handleSubmit}>
                
                <div>
                    ID :
                    <input
                        type="number"
                        name="id"
                        onChange={(e) => setClient({ ...client, 'id': e.target.value })}
                        value={client && client.id}
                    />
                </div>
                <div>
                    MARQUE :
                    <input
                        type="text"
                        name="marque"
                        onChange={(e) => setClient({ ...client, 'marque': e.target.value })}
                        value={client && client.marque}
                    />
                </div>
           
                <div>
                    MODELE :
                    <input
                        type="text"
                        name="model"
                        onChange={(e) => setClient({ ...client, 'marque': e.target.value })}
                        value={client && client.modele}
                    />
                </div>

                <div>
                    PRIX :
                    <input
                        type="number"
                        name="prix"
                        onChange={(e) => setClient({ ...client, 'prix': e.target.value })}
                        value={client.prix}
                    />
                </div>
                <div>
                    URL IMAGE :
                    <input
                        type="text"
                        name="urlimg"
                        onChange={(e) => setClient({ ...client, 'marque': e.target.value })}
                        value={client && client.urlimg}
                    />
                </div>
                <div>
                    CATEGORIE :
                    <input
                        type="text"
                        name="catergorie"
                        onChange={(e) => setClient({ ...client, 'marque': e.target.value })}
                        value={client && client.categorie}
                    />
                </div>

                <button  type="submit" className="btn btn-success">Modifier</button>
              
        </form>
           
        </>
    )
}
export default ClientUpdate


