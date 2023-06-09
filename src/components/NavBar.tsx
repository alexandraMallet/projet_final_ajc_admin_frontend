import React from "react";
import { BrowserRouter } from 'react-router-dom';

import { Link } from "react-router-dom";
import '../styles/NavBar.css'

function NavBar() {

  return (
    <>
    
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/pfobs' className="nav-link active">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to='/pfobs/compte' className="nav-link active">Mon compte</Link>
            </li>
            <li className="nav-item">
              <Link to='/pfobs/articles' className="nav-link active">Gérer les articles</Link>
            </li>
            <li className="nav-item">
              <Link to='/pfobs/clients' className="nav-link active">Gérer les client·e·s</Link>
            </li>
            <li className="nav-item">
              <Link to='/pfobs/commandes' className="nav-link active">Gérer les commandes</Link>
            </li>
            <li className="nav-item">
              <Link to='/pfobs/login' className="nav-link active">Se déconnecter</Link>
            </li>
          </ul>
        </div>
      </nav>


    </>
  )
}

export default NavBar

