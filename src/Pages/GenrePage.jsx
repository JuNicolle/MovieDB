import GenreCard from "../Components/GenreCard";
import GenreServices from "../Services/GenreServices";
import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

const GenrePage = () => {
        const [genres, setGenres] = useState([]);
    
        const fetchGenres = async () => {
            try {
                const response = await GenreServices.getAllGenres();
                setGenres(response.data.genres);
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect(() => {
            fetchGenres();
        },[])
            
        
        return <Container className="d-flex flex-column align-items-center">
        <h1>Selectionnez votre categorie</h1>
        <div className="listGenre">
        {genres.map((genre) => {
            return <GenreCard genreCard={genre} key={genre.id}></GenreCard>
        })}
        </div>
        <Navbar></Navbar>
        </Container>
    }
        
 
export default GenrePage;