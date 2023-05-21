import React, {useEffect} from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import CommandesComponent from "../components/CommandesComponent";


function CommandesVue() {


    useEffect(() => {
        <CommandesComponent/>
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

            {admin && <CommandesComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default CommandesVue