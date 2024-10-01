import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesServices from "../Services/MoviesServices";
import { useState } from "react";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovieById = async ()=>{
        try{
            const response = await MoviesServices.getMoviesbyID(id);
            setMovie(response.data);
            console.log(response.data);
        } catch (error){
            console.log(error);
        }
    }

useEffect(()=>{
    fetchMovieById();
},[])

    return <> 
        <div className="d-flex flex-column align-items-center">
            <h1>{movie.original_title}</h1>
            <p>Budget : {movie.budget}$</p>
            <img style={{ height: '30rem' }} src={"https://image.tmdb.org/t/p/original"+movie.poster_path}></img>
        </div>

    </>
}

export default MovieDetailsPage;