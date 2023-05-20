import NavBar from "./NavBar"
import '../styles/Header.css'
import Logo2 from '../assets/Logo2.png'

function Header () {

    return (

        <>
        
        <div className="container-fluid p-5 text-white">

            <h1>BlueClementine - administration du site</h1>
            <img src={Logo2} alt="logo, une clémentine bleue orangée"/>

        </div>
        <NavBar/>
        
        </>
    )
}

export default Header