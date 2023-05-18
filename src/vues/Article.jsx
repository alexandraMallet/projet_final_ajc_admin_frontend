import React, { useEffect, useState, useCallback } from "react"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ArticleVue() {

    const { id } = useParams();


    const navigate = useNavigate();

    const [article, setArticle] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8080/pfobs/articlesapi/${id}`).then((res) => res.json()).then(data => setArticle(data));
    }, [])


  
    function updateArticle(id){
        navigate('/pfobs/updatearticle/'+id);
    }

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    function deleteArticle(id){

       fetch(`http://localhost:8080/pfobs/articlesapi/${id}`, requestOptions)
       .then(navigate('/pfobs/articles'));
    }


    return (
        <>

            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Article demandé : </h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Marque</th>
                                        <th>Modèle</th>
                                        <th>image url</th>
                                        <th>Prix</th>
                                        <th>Catégorie</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>


                                        <td>{article && article.id}</td>
                                        <td>{article && article.marque}</td>
                                        <td>{article && article.modele}</td>
                                        <td>{article && article.urlimg}</td>
                                        <td>{article && article.prix}</td>
                                        <td>{article && article.categorie}</td>

                                        <td><button type="button" className="btn btn-warning" onClick={() => updateArticle(article.id)}>Modifier</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteArticle(article.id)}>Supprimer</button></td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div >
                </div>

            </div >

        </>
    )
}

export default ArticleVue