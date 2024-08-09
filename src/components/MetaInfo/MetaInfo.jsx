import clsx from 'clsx';
import Icon from '../shared/Icon';
import css from './MetaInfo.module.css';

const MetaInfo = ({ rating, reviews, location, className }) => {
  return (
    <div className={clsx(css.metaInfoWrapper, { [className]: className })}>
      <span>
        <Icon iconId='icon-star' />
        {rating}({reviews.length} {reviews.length < 2 ? `review` : `reviews`})
      </span>
      <span>
        <Icon iconId='icon-location' />
        {location}
      </span>
    </div>
  );
};

export default MetaInfo;
