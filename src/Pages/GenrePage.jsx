import GenreCard from "../Components/GenreCard";
import GenreServices from "../Services/GenreServices";
import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

const GenrePage = () => {
        const [genres, setGenres] = useState([]);
    
        const fetchGenres = async () => {
            try {
                const response = await GenreServices.getAllGenres();
                console.log(response.data.genres);
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
        <div className="d-flex justify-content-center flex-wrap gap-3">
        {genres.map((genre) => {
            return <GenreCard genreCard={genre}></GenreCard>
        })}
        </div>
        <Navbar></Navbar>
        </Container>
    }
        
 
export default GenrePage;