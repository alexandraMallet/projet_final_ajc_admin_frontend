import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import axios from "axios";


const ArticleCreateComponentTest = () => {

    const [file, setFile] = useState();

    // function imagePreview(file) {
    //     let reader = new FileReader();
    //     reader.onload = event => {
    //         this.selectedImageUrl = event.target.result
    //     }
    //     reader.readAsDataURL(file)
    // }

    function envoyerImage(e) {


        let formData = new FormData();
        formData.append('file', file)

        axios.post('http://localhost:8080/pfobs/upload',
            formData
        )
            .catch(function () {
                console.log('erreur');
            });
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
    console.log(admin);




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
            .then(envoyerImage())
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
                            required
                        />
                    </div>
                    <div>
                        NOM IMAGE :
                        <input
                            className="input"
                            type="text"
                            name="urlimg"
                            onChange={(e) => setArticle({ ...article, 'urlimg': 'http://localhost:8080/pfobs/assets/' + e.target.value })}
                            required
                        />
                        <p className="input nomimg">nom complet avec extension, sans accents, par exemple : telephone.jpg</p>
                    </div>
                    <div>
                        CATEGORIE :
                        <input
                            className="input"
                            type="text"
                            name="categorie"
                            onChange={(e) => e.target.value < 4 ? setArticle({ ...article, 'categorie': e.target.value }) : alert("vous devez saisir 0, 1, 2 ou 3")}
                            required
                        />
                        <ul className="info-categories">
                            <li>forfait internet, entrez : 0</li>
                            <li>forfait mobile, entrez : 1</li>
                            <li>smartphone, entrez : 2</li>
                            <li>objet connecté, entrez : 3</li>
                        </ul>
                    </div>


                    <label htmlFor="file">Choisir une image</label>
                    <input className="input"
                        type="file"
                        name="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />


                    {/* <div class="image-form">
                        <input type="file" id="image" class="image-input" name="file"
                            onChange={(e) => {setFile(e.target.files[0]); imagePreview(e)}}
                        />
                        <label class="image" for="image">Modifier l'image</label>

                        <div class="preview-image">
                            <img src="selectedImageUrl" alt="mon objet"/>
                        </div>

                    </div> */}

                    <button type="submit" className="btn btn-info">Créer l'article</button>

                </form>


            </div>

        </>
    )
}
export default ArticleCreateComponentTest