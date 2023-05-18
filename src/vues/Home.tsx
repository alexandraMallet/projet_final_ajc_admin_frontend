import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import VersLogin from "../components/Redirect";



function Home() {

    const navigate = useNavigate();
    function versArticles() {
        navigate('/pfobs/articles');
    }

    function versClients() {
        navigate('/pfobs/clients');
    }

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
            <div className="container">

                {admin &&

                    <div className="versArticles">

                        <div className="btn-vers-articles">
                            <button type="button" className="btn btn-info" onClick={versArticles}>Gérer les articles</button>
                        </div>

                    </div>

                }


                {admin &&

                    <div className="versArticles">

                        <div className="btn-vers-articles">
                            <button type="button" className="btn btn-info" onClick={versClients}>Gérer les clients</button>
                        </div>

                    </div>}

            </div>




            {!admin && <VersLogin />}


        </>
    );
}

export default Home;