import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import './IllustrationCard.css';

const IllustrationCard = (props) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLikeState = localStorage.getItem(`like-${props.imgPath}`);
    if (storedLikeState === 'true') {
      setLiked(true);
    }
  }, [props.imgPath]);

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    localStorage.setItem(`like-${props.imgPath}`, newLikedState);
  };

  const openFullSizeImage = () => {
    window.open(props.imgPath, '_blank');
  };

  return (
    <Card className="illustration-card-view">
      <div className="image-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="square-image" onClick={openFullSizeImage} />
      </div>

      <Card.Footer>
        <b
          style={{ fontSize: 'large', marginRight: '10px' }}
          className="illustration-highlight"
          onClick={handleLike}
        >
          <i className={`fa ${liked ? 'fa-heart' : 'fa-heart-o'}`}></i>
        </b>
        <b
          style={{ fontSize: 'large' }}
          className="illustration-highlight"
          onClick={openFullSizeImage}
        >
          <i className="fa fa-expand"></i>
        </b>
      </Card.Footer>
    </Card>
  );
};

export default IllustrationCard;