import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesServices from "../Services/MoviesServices";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


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

    const navigate=useNavigate();
    const navigateTo=(genre)=>{
        navigate("/Genres/"+genre.id,{state:{"genre":genre}})
    }

useEffect(()=>{
    fetchMovieById();
},[])

    return <> 
        <div className="d-flex flex-column align-items-center">
            <h1>{movie.title}</h1>
            <p>Date de sortie : {movie.release_date}</p>
            <div className="d-flex gap-4 mb-3">
            {movie.genres && movie.genres.map((genre)=>{
                return <Button  className="mt-3"variant="warning" key={genre.id} size="lg" onClick={()=>{navigateTo(genre)}}>{genre.name} </Button>
            })}
            </div>
            <img style={{ height: '30rem' }} src={"https://image.tmdb.org/t/p/original"+movie.poster_path}></img>
            <p className="mt-4">Résumé : {movie.overview}</p>
        </div>
    </>
}

export default MovieDetailsPage;