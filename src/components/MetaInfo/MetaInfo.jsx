import Icon from '../shared/Icon/Icon';
import css from './MetaInfo.module.css';

const MetaInfo = ({ rating, reviews, location }) => {
  return (
    <div className={css.metaInfoWrapper}>
      <span>
        <Icon iconId='icon-star' />
        {rating}({reviews.length} reviews)
      </span>
      <span>
        <Icon iconId='icon-location' />
        {location}
      </span>
    </div>
  );
};

export default MetaInfo;
