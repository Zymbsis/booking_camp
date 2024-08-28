import Review from '../Review/Review';
import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.reviews}>
      {reviews.map((review, index) => (
        <li
          className={css.review}
          key={index}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
