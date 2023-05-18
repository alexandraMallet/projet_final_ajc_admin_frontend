
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"

const ArticleUpdate = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [isformsubmit, setIsFormSubmit] = useState(false);
    useEffect(() => {


        fetch(`http://localhost:8080/pfobs/articlesapi/${id}`).then((res) => res.json()).then(data => setArticle(data));
        setIsFormSubmit(false);
    }, [])

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/pfobs/articlesapi', requestOptions)
            .then(setIsFormSubmit(true))
            .then(navigate('/pfobs/articles'));

    }
    return (
        <>
            <div className="container">
                <h2>Modifier l'article {article.id} : </h2>

                <form onSubmit={handleSubmit}>

                    <div>
                        MARQUE :
                        <input
                            className="input"
                            type="text"
                            name="marque"
                            onChange={(e) => setArticle({ ...article, 'marque': e.target.value })}
                            value={article && article.marque}
                            required
                        />
                    </div>

                    <div>
                        MODELE :
                        <input
                            className="input"
                            type="text"
                            name="modele"
                            onChange={(e) => setArticle({ ...article, 'modele': e.target.value })}
                            value={article && article.modele}
                            required
                        />
                    </div>

                    <div>
                        PRIX :
                        <input
                            className="input"
                            type="number"
                            name="prix"
                            onChange={(e) => setArticle({ ...article, 'prix': e.target.value })}
                            value={article.prix}
                            required
                        />
                    </div>
                    <div>
                        URL IMAGE :
                        <input
                            className="input"
                            type="text"
                            name="urlimg"
                            onChange={(e) => setArticle({ ...article, 'urlimg': e.target.value })}
                            value={article && article.urlimg}
                            required
                        />
                    </div>
                    <div>
                        CATEGORIE :
                        <input
                            className="input"
                            type="text"
                            name="catergorie"
                            onChange={(e) => setArticle({ ...article, 'categorie': e.target.value })}
                            value={article && article.categorie}
                            required
                        />

                        <ul className="info-categories">
                            <li>forfait internet, entrez : 0</li>
                            <li>forfait mobile, entrez : 1</li>
                            <li>smartphone, entrez : 2</li>
                            <li>objet connecté, entrez : 3</li>
                        </ul>
                    </div>

                    <button type="submit" className="btn btn-info">Modifier</button>

                </form>
            </div>

        </>
    )
}
export default ArticleUpdate


