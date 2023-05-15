import React from "react";

function NavBar() {

    return (
        <>
<nav className="navbar navbar-expand-sm bg-warning navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Articles</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Compte Admin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Se connecter</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Se déconnecter</a>
      </li>
    </ul>
  </div>
</nav>

        
        </>
    )
}

export default NavBar