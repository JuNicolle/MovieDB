import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const GenreCard=({genreCard})=>{
    const navigate=useNavigate();
    const navigateTo=(id)=>{
        navigate("/Genres/"+id)
    }
  

  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=>{navigateTo(genreCard.id)}}>
        {genreCard.name}
      </Button>
    </div>
  );
}

export default GenreCard;