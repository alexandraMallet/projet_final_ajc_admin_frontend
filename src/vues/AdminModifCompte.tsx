import React from "react"
import ModifCompteForm from "../components/ModifCompteForm";
import VersLogin from "../components/Redirect";
import { redirect } from "react-router-dom";

function AdminModifCompte() {

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

            {admin && <ModifCompteForm/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default AdminModifCompte