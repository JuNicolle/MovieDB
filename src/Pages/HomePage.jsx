import { Button, Container, Navbar } from "react-bootstrap";
import MoviesServices from "../Services/MoviesServices";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);
    const [searchValue, setSearchValue] = useState("");
// ajout d'un boolean, si on clique on lance les fonctions, sinon fetchmovies
    const [searching, setSearching] = useState(false); 

    const fetchMovies = async () => {
        try {
            const response = await MoviesServices.getAllMovies(currentPage);
            // setMaxPage(response.data.total_pages);
            setMovies(response.data.results);
            setMaxPage(500);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [currentPage])


      {/* Ajout de la fonction rechercher */}
    const searchFilm = async () => {
        if (searchValue === "") {
            fetchMovies();
            searching(false);
        } else {
        try {
            const response = await MoviesServices.getMoviesByTitle(searchValue, currentPage);
            setMaxPage(response.data.total_pages);
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
        } 
    }
}

    useEffect(() => {
        if (searching === false) {
            fetchMovies();
        } else{
            searchFilm();
        }
    },[currentPage])

    return <Container className="d-flex flex-column align-items-center flex-wrap">
        <h1>Films du moment</h1>

    <div>
        {/* Ajout de la fonction rechercher */}
    <Form onSubmit={(e)=>{
            e.preventDefault();
            // e.preventDefault evite le rechargement de la page auto lors de l'envoi d'un formulaire
            setCurrentPage(1); 
            setSearching(true);
            searchFilm();
        }}>
        <Form.Label ></Form.Label>
        <Form.Control 
        type="text" 
        value={searchValue} 
        id="search" 
        placeholder="Ex : Deadpool"
        onChange={(e)=>{
            setSearchValue(e.currentTarget.value);
        }}/>
        <Form.Text >
        </Form.Text>
    </Form>
        <Button variant="danger" 
        className="col-12 mb-3 mt-2"
        onClick={()=>{setCurrentPage(1); 
        setSearching(true); 
        searchFilm();}}>Rechercher</Button>
    </div>   

        <div className="d-flex justify-content-center flex-wrap gap-3">
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movieCard={movie}></MovieCard>
            })}
        </div>
        <Pagination className="mt-5">
            {currentPage > 1 && <>
                <Pagination.First onClick={() => { setCurrentPage(1) }} />
                <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
                <Pagination.Item onClick={() => { setCurrentPage(1) }}>{1}</Pagination.Item>
            </>}

            {currentPage - 5 > 0 && <>
                <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage - 5) }} />
            </>}


            {(currentPage != 2 && currentPage > 1) && <>
                <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
            </>}

            <Pagination.Item active>{currentPage}</Pagination.Item>

            {currentPage + 1 < maxPage && <>
                <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</Pagination.Item>
            </>}

            {currentPage + 5 <= maxPage && <>
                <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage + 5) }} />
            </>}

            {currentPage < maxPage && <>
                <Pagination.Item onClick={() => { setCurrentPage(maxPage) }}>{maxPage}</Pagination.Item>
                <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
                <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />
            </>}

        </Pagination>
    </Container>

}

export default HomePage;