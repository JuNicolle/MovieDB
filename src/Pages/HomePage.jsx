import { Container, Navbar } from "react-bootstrap";
import MoviesServices from "../Services/MoviesServices";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import Pagination from 'react-bootstrap/Pagination';


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);

    const fetchMovies = async () => {
        try {
            const response = await MoviesServices.getAllMovies(currentPage);
            // setMaxPage(response.data.total_pages);
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [currentPage])


    return <Container className="d-flex flex-column align-items-center flex-wrap">
        <h1>Films du moment</h1>
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