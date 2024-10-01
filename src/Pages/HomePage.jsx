import { Container, Navbar } from "react-bootstrap";
import MoviesServices from "../Services/MoviesServices";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";



const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await MoviesServices.getAllMovies();
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    },[])
        
    
    return <Container className="d-flex flex-column align-items-center">
    <h1>Films du moment</h1>
    <div className="d-flex justify-content-center flex-wrap gap-3">
    {movies.map((movie) => {
        return <MovieCard key={movie.id} movieCard={movie}></MovieCard>
    })}
    </div>
    <Navbar></Navbar>
    </Container>
    
}
 
export default HomePage;