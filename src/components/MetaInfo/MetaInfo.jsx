import { Icon } from 'shared';
import clsx from 'clsx';
import css from './MetaInfo.module.css';

const MetaInfo = ({ rating, reviews, location, className }) => {
  return (
    <div className={clsx(css.metaInfoWrapper, className)}>
      <span>
        <Icon iconId='icon-star' />
        {rating}({reviews.length} {reviews.length < 2 ? `review` : `reviews`})
      </span>
      <span>
        <Icon iconId='icon-location' />
        {location.split(',').reverse().join(', ')}
      </span>
    </div>
  );
};

export default MetaInfo;
