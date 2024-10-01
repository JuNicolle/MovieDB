import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () =>{  
    return <>
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand className="me-auto">
                <Link to={"/"} className="nav-link">Accueil</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="mx-2">
                        <Link to={"/Genres"} className="nav-link">Genres</Link>
                    </Nav.Link>
                    {/* Ajoutez d'autres liens ici avec le même format si nécessaire */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</>

}

export default NavBar;