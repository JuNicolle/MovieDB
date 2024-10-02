import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorsService from "../Services/ActorsService";
import { Button } from "react-bootstrap";

const ActorDetailPage = () => {
    const { id } = useParams();
    const [actors, setActors] = useState({});

    const fetchActorById = async ()=>{
        try{
            const response = await ActorsService.getActorById(id);
            setActors(response.data);
            console.log(response.data);
        } catch (error){
            console.log(error);
        }
    }


useEffect(()=>{
    fetchActorById();
},[])

    return <> 
        <div className="d-flex flex-column align-items-center">
            <h1>{actors.name}</h1>
            <p>Date de naissance : {actors.birthday}</p>
            <img style={{ height: '30rem' }} src={"https://image.tmdb.org/t/p/original"+actors.profile_path}></img>
            <div className="biography">
                <p className="mt-4">
                Biographie : <br />{actors.biography}
                </p> 
            </div>
            {/* <div className="d-flex gap-4 mb-3">
            {movie.genres && movie.genres.map((genre)=>{
                return <Button  className="mt-3"variant="warning" key={genre.id} size="lg" onClick={()=>{navigateTo(genre)}}>{genre.name} </Button>
            })}
            </div>
            <img style={{ height: '30rem' }} src={"https://image.tmdb.org/t/p/original"+movie.poster_path}></img>
            <p className="mt-4">Résumé : {movie.overview}</p> */}
        </div>
    </>
}
 
export default ActorDetailPage;