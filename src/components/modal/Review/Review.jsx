import { Icon } from 'shared';
import css from './Review.module.css';

const Review = ({ review }) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index + 1 <= review.reviewer_rating ? 'yellow' : 'gray',
  );

  return (
    <>
      <div className={css.reviewer}>
        <span>{review.reviewer_name[0]}</span>
        <p className={css.reviewerName}>{review.reviewer_name}</p>
        <span>
          {stars.map((item, index) => (
            <Icon
              key={index}
              iconId='icon-star'
              className={css[item]}
            />
          ))}
        </span>
      </div>
      <p className={css.reviewText}>{review.comment}</p>
    </>
  );
};

export default Review;
