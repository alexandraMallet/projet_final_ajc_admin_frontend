import React from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import ArticleCreateComponent from "../components/ArticleCreateComponent";


function ArticleCreateVue() {

   
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

            {admin && <ArticleCreateComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default ArticleCreateVue