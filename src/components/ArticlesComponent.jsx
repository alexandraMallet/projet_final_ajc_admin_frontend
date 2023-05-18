import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import '../styles/ArticlesVue.css'

function ArticlesComponent() {

    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/pfobs/articlesapi').then((res) => res.json()).then(data => setArticles(data));
    }, [])


    function versArticle(id){
        navigate('/pfobs/article/'+id);
    }


    return (
        <>

            <div>
                <div className="d-flex justify-content-center">
                    <div id="personnesArray" className="card m-5">
                        <div className="card-header">
                            <h2>Articles</h2>
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
                                    {articles.map((article, index) => {
                                        return (
                                            <tr key={index}>


                                                <td>{articles && article.id}</td>
                                                <td className="marque">{articles && article.marque}</td>
                                                <td className="model">{articles && article.modele}</td>
                                                <td>{articles && article.urlimg}</td>
                                                <td>{articles && article.prix}</td>
                                                <td>{articles && article.categorie}</td>

                                            <td><button className="btn btn-info" onClick={() => versArticle(article.id)}>Modifier ou supprimer</button></td>

                                            </tr>

                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div >
                </div>

            </div >

            <div className="d-flex justify-content-around">
                <a href="/pfobs/articlecreate">
                    <button type="submit" className="btn btn-primary">Nouvel
                        article</button>
                </a>
          
            </div>        </>
    )
}

export default ArticlesComponent