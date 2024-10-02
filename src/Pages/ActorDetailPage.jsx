import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorsService from "../Services/ActorsService";
import { Button } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";

const ActorDetailPage = () => {
    const { id } = useParams();
    const [actors, setActors] = useState({});
    const [actorsMovies, setActorsMovies] = useState([]);

    const fetchActorById = async ()=>{
        try{
            const response = await ActorsService.getActorById(id);
            setActors(response.data);
            console.log(response.data);
        } catch (error){
            console.log(error);
        }
    }

    const fetchMoviesByActorId = async ()=>{
        try {
            const response = await ActorsService.getMoviesByActorId(id);
            console.log(response.data.results);
            setActorsMovies(response.data.results);
            
        } catch (error) {
            console.log(error);  
        }
    }




useEffect(()=>{
    fetchActorById(), fetchMoviesByActorId();
},[])

    return <> 
        <div className="d-flex flex-column align-items-center">
            <h1>{actors.name}</h1>
            <p>Date de naissance : {new Date(actors.birthday).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <img style={{ height: '30rem' }} src={"https://image.tmdb.org/t/p/original"+actors.profile_path}></img>
            <div className="biography">
                <p className="mt-4">
                Biographie : <br />{actors.biography}
                </p> 
            </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {actorsMovies.map((actorsMovies) => {
               return <MovieCard movieCard={actorsMovies} key={actorsMovies.id} ></MovieCard>
            })}
        </div>
    </>
}
 
export default ActorDetailPage;