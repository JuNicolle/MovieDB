import { Link } from 'react-router-dom';

const NavBar = () =>{  
    return <>
        <div className='d-flex justify-content-center gap-5 h2 '>
            <Link to={"/"} className="nav-link">Accueil</Link>
            <Link to={"/Genres"} className="nav-link">Genres</Link>
            <Link to={"/Actors"} className="nav-link">Acteurs</Link>
        </div>
</>

}

export default NavBar;