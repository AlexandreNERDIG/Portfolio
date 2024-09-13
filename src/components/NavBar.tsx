import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <>
            <nav>
                <div className="logo">
                    <img src="img/insa.png"/>
                </div>
                <ul className="nav-links">
                    <li className="link"><Link to="/">Accueil</Link></li>
                    <li className="link"><Link to="/Resume">A Propos de Moi</Link></li>
                    <li className="link"><Link to="/ContactPage">Me Contacter</Link></li>
                    <li className="link"><Link to="/ProjectList">Projet Fini</Link></li>
                </ul>
                <Link className='btn' to={"/Test"}>Me recruter</Link>
            </nav>
        </>
    )
}

export default NavBar;