import React from "react"

function ListeArticles() {

    let articles: any;

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    async function seConnecter(e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/pfobs/articlesapi', requestOptions);
            articles = await response.json();
            console.log(articles);
        }
        
        catch {
            alert("une erreur est survenue");
        }

    }

    return (
        <>

    {articles && JSON.stringify(articles)}        
        </>
    )
}

export default ListeArticles