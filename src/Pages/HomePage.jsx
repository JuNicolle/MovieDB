import { Container, Navbar } from "react-bootstrap";
import MoviesServices from "../Services/MoviesServices";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import Pagination from 'react-bootstrap/Pagination';


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(20);

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
    <Pagination className="mt-3">
        {currentPage>1 && <>
            <Pagination.First onClick={()=>{setCurrentPage(1)}} />
      <Pagination.Prev onClick={()=>{setCurrentPage(currentPage-1)}}/>
      <Pagination.Item onClick={()=>{setCurrentPage(1)}}>{1}</Pagination.Item>
      <Pagination.Ellipsis onClick={()=>{setCurrentPage(currentPage-5)}} />

      
        </>}
      
      {(currentPage!=2&&currentPage>1)&& <>
        <Pagination.Item onClick={()=>{setCurrentPage(currentPage-1)}}>{currentPage-1}</Pagination.Item>
      </>}
      <Pagination.Item onClick={()=>{setCurrentPage(currentPage)}} active>{currentPage}</Pagination.Item>
        {currentPage<maxPage && <>

            <Pagination.Item onClick={()=>{setCurrentPage(currentPage+1)}}>{currentPage+1}</Pagination.Item>

            <Pagination.Ellipsis onClick={()=>{setCurrentPage(currentPage+5)}}/>
            <Pagination.Item onClick={()=>{setCurrentPage(maxPage)}}>{maxPage}</Pagination.Item>
            <Pagination.Next onClick={()=>{setCurrentPage(currentPage+1)}}></Pagination.Next>
            <Pagination.Last onClick={()=>{setCurrentPage(maxPage)}}></Pagination.Last>
            </>}
            </Pagination>
    </Container>
    
}
 
export default HomePage;