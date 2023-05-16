import NavBar from "./NavBar"
import '../styles/Header.css'

function Header () {

    return (

        <>
        
        <div className="container-fluid p-5 bg-success text-white">

            <h1>Clémentine - administration du site</h1>

        </div>
        <NavBar/>
        
        </>
    )
}

export default Header