import React from "react"
import VersLogin from "../components/Redirect";
import { redirect } from "react-router-dom";
import AdminUpdate from "../components/AdminUpdate";

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

            {admin && <AdminUpdate/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default AdminModifCompte