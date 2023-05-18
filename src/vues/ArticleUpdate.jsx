
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"

const ArticleUpdate = ()=>{
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
    return(
        <>
          <form onSubmit={handleSubmit}>
                
                <div>
                    ID :
                    <input
                        type="number"
                        name="id"
                        onChange={(e) => setArticle({ ...article, 'id': e.target.value })}
                        value={article && article.id}
                    />
                </div>
                <div>
                    MARQUE :
                    <input
                        type="text"
                        name="marque"
                        onChange={(e) => setArticle({ ...article, 'marque': e.target.value })}
                        value={article && article.marque}
                    />
                </div>
           
                <div>
                    MODELE :
                    <input
                        type="text"
                        name="model"
                        onChange={(e) => setArticle({ ...article, 'marque': e.target.value })}
                        value={article && article.modele}
                    />
                </div>

                <div>
                    PRIX :
                    <input
                        type="number"
                        name="prix"
                        onChange={(e) => setArticle({ ...article, 'prix': e.target.value })}
                        value={article.prix}
                    />
                </div>
                <div>
                    URL IMAGE :
                    <input
                        type="text"
                        name="urlimg"
                        onChange={(e) => setArticle({ ...article, 'marque': e.target.value })}
                        value={article && article.urlimg}
                    />
                </div>
                <div>
                    CATEGORIE :
                    <input
                        type="text"
                        name="catergorie"
                        onChange={(e) => setArticle({ ...article, 'marque': e.target.value })}
                        value={article && article.categorie}
                    />
                </div>

                <button  type="submit" className="btn btn-success">Modifier</button>
              
        </form>
           
        </>
    )
}
export default ArticleUpdate


