import React from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import CommandeUpdateComponent from "../components/CommandeUpdateComponent";


function CommandeUpdateVue() {

   
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

            {admin && <CommandeUpdateComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default CommandeUpdateVue