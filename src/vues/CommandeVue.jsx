import React, {useEffect} from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import CommandeComponent from "../components/CommandeComponent";


function CommandeVue() {


    useEffect(() => {
        <CommandeComponent/>
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

            {admin && <CommandeComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default CommandeVue