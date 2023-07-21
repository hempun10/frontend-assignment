interface RatingProps {
  rating: number;
}
const StarRating = ({ rating }: RatingProps) => {
  const maxRating = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return <p>{renderStars()}</p>;
};

export default StarRating;
