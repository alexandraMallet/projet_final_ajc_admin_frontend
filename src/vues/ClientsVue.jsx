import React, {useEffect} from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import ClientsComponent from "../components/ClientsComponent";


function ClientsVue() {


    useEffect(() => {
        <ClientsComponent/>
    }, [])

   
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

            {admin && <ClientsComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default ClientsVue