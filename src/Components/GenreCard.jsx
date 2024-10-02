import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const GenreCard=({genreCard})=>{
    const navigate=useNavigate();
    const navigateTo=(genre)=>{
        navigate("/Genres/"+genre.id,{state:{"genre":genre}})
    }
  

  return (
    <div className="d-grid gap-2">
      <Button variant="danger" size="lg" onClick={()=>{navigateTo(genreCard)}}>
        {genreCard.name}
      </Button>
    </div>
  );
}

export default GenreCard;