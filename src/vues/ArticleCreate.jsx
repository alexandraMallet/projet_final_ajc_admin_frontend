import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

const ArticleCreate = () => {

    const navigate = useNavigate();


    const [article, setArticle] = useState({});

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/pfobs/articlesapi', requestOptions)
            .then(navigate('/pfobs/articles'));
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {/* <div>
                    ID:
                    <input
                        type="number"
                        name="id"
                        onChange={(e) => setArticle({ ...article, 'id': e.target.value })}
                    />
                </div> */}
                    <div>
                        MARQUE :
                        <input
                            className="input"
                            type="text"
                            name="marque"
                            onChange={(e) => setArticle({ ...article, 'marque': e.target.value })}
                        />
                    </div>
                    <div>
                        MODELE :
                        <input
                            className="input"
                            type="text"
                            name="modele"
                            onChange={(e) => setArticle({ ...article, 'modele': e.target.value })}
                        />
                    </div>
                    <div>
                        PRIX :
                        <input
                            className="input"
                            type="number"
                            name="prix"
                            onChange={(e) => setArticle({ ...article, 'prix': e.target.value })}
                        />
                    </div>
                    <div>
                        NOM IMAGE :
                        <input
                            className="input"
                            type="text"
                            name="urlimg"
                            onChange={(e) => setArticle({ ...article, 'urlimg': e.target.value })}
                        />
                        <p className="input nomimg">nom complet avec extension, sans accents, par exemple : telephone.jpg -  Ajouter l'image correspondante dans le dossier "assets" sur le serveur</p>
                    </div>
                    <div>
                        CATEGORIE :
                        <input
                            className="input"
                            type="text"
                            name="categorie"
                            onChange={(e) => e.target.value < 4 ? setArticle({ ...article, 'categorie': e.target.value }) : alert("vous devez saisir 0, 1, 2 ou 3")}
                        />
                        <ul className="info-categories">
                            <li>forfait internet, entrez : 0</li>
                            <li>forfait mobile, entrez : 1</li>
                            <li>smartphone, entrez : 2</li>
                            <li>objet connecté, entrez : 3</li>
                        </ul>
                    </div>

                    <button type="submit" className="btn btn-info">Créer l'article</button>

                </form>
            </div>
        </>
    )
}
export default ArticleCreate