
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"

const AdminUpdate = ()=>{
    const navigate = useNavigate();

    const { id } = useParams();
    const [admin, setAdmin] = useState({});
    const [isformsubmit, setIsFormSubmit] = useState(false);
    useEffect(() => {
       
       
        fetch(`http://localhost:8080/pfobs/admin/${id}`).then((res) => res.json()).then(data => setAdmin(data));
        setIsFormSubmit(false);
    }, [])

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(admin)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/pfobs/admin', requestOptions)
        .then(setIsFormSubmit(true))
        .then(navigate('/pfobs'));

    }
    return(
        <>
          <form onSubmit={handleSubmit}>
                
          <h2>Modifier le admin {admin.id} : </h2>

          <div>
                    UTILISATEUR :
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => setAdmin({ ...admin, 'username': e.target.value })}
                        value={admin && admin.username}
                        required
                    />
                </div>
                <div>
                    MOT DE PASSE :
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setAdmin({ ...admin, 'password': e.target.value })}
                        value={admin && admin.password}
                        required
                    />
                </div>
                <div>
                    NOM :
                    <input
                        type="text"
                        name="nom"
                        onChange={(e) => setAdmin({ ...admin, 'nom': e.target.value })}
                        value={admin && admin.nom}
                        required
                    />
                </div>
                <div>
                    PRENOM :
                    <input
                        type="text"
                        name="prenom"
                        onChange={(e) => setAdmin({ ...admin, 'prenom': e.target.value })}
                        value={admin && admin.prenom}
                        required
                    />
                </div>
                {/* <div>
                    EMAIL :
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setAdmin({ ...admin, 'email': e.target.value })}
                        value={admin && admin.email}
                        required
                    />
                </div> */}

                <button  type="submit" className="btn btn-success">Modifier</button>
              
        </form>
           
        </>
    )
}
export default AdminUpdate


