import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ActorCard=({actorCard})=>{
    // Pour passer l'ID dans l'URL, on utilise le hook useNavigate de react-router-dom
      const navigate=useNavigate();
      const navigateTo=(id)=>{
          navigate("/Actors/"+id)
      }
      

    return <>
        <Card style={{ width: '18rem'}} onClick={()=>{navigateTo(actorCard.id)}}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+actorCard.profile_path} />
        <Card.Body>
          <Card.Title>{actorCard.name}</Card.Title>
          <Card.Text>
            {actorCard.overview}
          </Card.Text>
          <Button variant="primary">Voir filmographie</Button>
        </Card.Body>
      </Card>
    </>
}
    export default ActorCard;