import React, {useEffect} from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import ArticlesComponent from "../components/ArticlesComponent";


function ArticlesVue() {


    useEffect(() => {
        <ArticlesComponent/>
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

            {admin && <ArticlesComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default ArticlesVue