import React, {useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import { useEffect } from "react";
import GenreServices from '../Services/GenreServices';
import { Pagination } from 'react-bootstrap';
import MovieCard from '../Components/MovieCard';
   
   const GenreDetailsPage = () => {
    const {id} = useParams();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);

   
    const fetchFilmByGenre = async ()=>{
        try{
            const response = await GenreServices.getMoviesByGenreID(currentPage, id);
            console.log(response.data.results);
            setMovies(response.data.results);
            setTimeout(() => {
                window.scrollTo(0, 0);

            },100)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchFilmByGenre();
    },[currentPage]);

    console.log(location.state.genre.name);
    return <>
            <div className="categoryPart">
            Films dans la catégorie {location.state.genre.name}
            </div>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {movies.map((movie) => {
               return <MovieCard key={movie.id} movieCard={movie}></MovieCard>
            })}

        </div>
        
        <div className="d-flex justify-content-center flex-wrap gap-3">
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
        </div>
    
    
    
    </>
};
 
export default GenreDetailsPage;