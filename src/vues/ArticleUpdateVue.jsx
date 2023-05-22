import React from "react"
import { redirect } from 'react-router-dom';
import '../styles/AdminCompte.css'
import VersLogin from "../components/Redirect";
import ArticleUpdateComponent from "../components/ArticleUpdateComponent";


function ArticleUpdateVue() {

   
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

            {admin && <ArticleUpdateComponent/>}

            {!admin && <VersLogin/>}


        </>
    )
}

export default ArticleUpdateVue