import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorsService from "../Services/ActorsService";
import MovieCard from "../Components/MovieCard";
import { Pagination } from "react-bootstrap";


const ActorDetailPage = () => {
    const { id } = useParams();
    const [actors, setActors] = useState({});
    const [actorsMovies, setActorsMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(20);

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
            const response = await ActorsService.getMoviesByActorId(id, currentPage);
            console.log(response.data.results);
            setActorsMovies(response.data.results);
            setMaxPage(response.data.total_pages);
            
        } catch (error) {
            console.log(error);  
        }
    }

useEffect(()=>{
    fetchActorById(), fetchMoviesByActorId();
},[])

useEffect(()=>{
    fetchMoviesByActorId();
},[currentPage])

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
        <div className="d-flex flex-column align-items-center flex-wrap mt-2">
        <Pagination>
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
}
 
export default ActorDetailPage;