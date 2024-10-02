import { useEffect, useState } from 'react';
import ActorsServices from '../Services/ActorsService';
import { Container } from 'react-bootstrap';
import ActorCard from '../Components/ActorCard';


const ActorsPage = () => { 
    
    const [actors, setActors] = useState([]);

    async function fetchAllActors  ()  {
        try {
            const response = await ActorsServices.getAllActors();
            setActors(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            
        }
    }

useEffect(() => {
    fetchAllActors();
}, []);


    return <Container className="d-flex flex-column align-items-center">
        <h1>Liste Acteurs</h1>
        <div className="listGenre">
        {actors.map((actors) => {
            return <ActorCard actorCard={actors} key={actors.id}></ActorCard>
        })}
        </div>



    </Container>;
}
export default ActorsPage;