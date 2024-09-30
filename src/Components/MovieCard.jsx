import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard=({movieCard})=>{
    console.log(movieCard);
    return <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+movieCard.poster_path} />
        <Card.Body>
          <Card.Title>{movieCard.title}</Card.Title>
          <Card.Text>
            {movieCard.overview}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </>;
  }
  
  export default MovieCard;