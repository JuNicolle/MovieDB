import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () =>{  
    return <>
        <div className='d-flex justify-content-center gap-5 h2 '>
            <Link to={"/"} className="nav-link">Accueil</Link>
            <Link to={"/Genres"} className="nav-link">Genres</Link>
        </div>
</>

}

export default NavBar;