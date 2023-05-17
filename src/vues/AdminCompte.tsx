import React from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import ProfilAdmin from "../components/ProfilAdmin";
import VersLogin from "../components/Redirect";





function AdminCompte() {

   
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

            {admin && <ProfilAdmin />}

            {!admin && <VersLogin/>}


        </>
    )
}

export default AdminCompte