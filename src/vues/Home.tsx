import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import ListeArticles from "../components/ListeArticles";
import ListeClients from "../components/ListeClients";
import VersLogin from "../components/Redirect";



function Home() {

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

            {admin && <ListeArticles/>}

            {admin && <ListeClients/>}


            {!admin && <VersLogin/>}


        </>
    );
}

export default Home;