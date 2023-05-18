import React from "react"
import { redirect, useNavigate } from 'react-router-dom';
import '../styles/AdminCompte.css'

function ProfilAdmin() {

    const navigate = useNavigate();
   
    function updateAdmin(id) {
        navigate('/pfobs/updateadmin/'+id);
    }


    function getAdminStorage() {

        const adminStorage = sessionStorage.getItem("admin");


        if (adminStorage == null) {
            redirect('/pfobs/login');
        } else {
            return JSON.parse(adminStorage);
        }
    }

    const admin = getAdminStorage();
    return (
        <>
            <div className="admin-vue">
                <div className="mt-3">
                    <h2>Mon compte admin</h2>
                    <div className="card">
                        <div className="card-body">identifiant :</div>
                        <div className="card-body">{admin && admin.username}</div>

                    </div>
                    <div className="card">
                        <div className="card-body">mot de passe :</div>
                        <div className="card-body">********</div>

                    </div>
                    <div className="card">
                        <div className="card-body">nom :</div>
                        <div className="card-body">{admin && admin.nom}</div>

                    </div>
                    <div className="card">
                        <div className="card-body">prénom :</div>
                        <div className="card-body">{admin && admin.prenom}</div>
                    </div>
                </div>

                <div className="btn-modif">
                    <button type="button" className="btn btn-info" onClick={() => updateAdmin(admin.id)}>modifier mes informations</button>
                </div>
            </div>
        </>
    )
}

export default ProfilAdmin