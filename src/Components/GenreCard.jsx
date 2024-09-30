import Button from 'react-bootstrap/Button';

function GenreCard({genreCard}) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        {genreCard.name}
      </Button>
    </div>
  );
}

export default GenreCard;