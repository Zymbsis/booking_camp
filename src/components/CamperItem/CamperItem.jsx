import FavoriteButton from '../FavoriteButton/FavoriteButton';
import MetaInfo from '../MetaInfo/MetaInfo';
import css from './CamperItem.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Button } from 'shared';
import CamperTitle from '../shared/CamperTitle';
import CamperPrice from '../shared/CamperPrice';
import PageFeaturesList from '../PageFeaturesList/PageFeaturesList';

const CamperItem = ({ item, onClick }) => {
  const { name, price, id, rating, reviews, location, gallery } = item;
  return (
    <>
      <ImageCard
        img={gallery[0]}
        name={name}
      />
      <div className={css.textWrapper}>
        <div>
          <div className={css.titleWrapper}>
            <CamperTitle>{name}</CamperTitle>
            <div className={css.priceWrapper}>
              <CamperPrice>{price}</CamperPrice>
              <FavoriteButton id={id} />
            </div>
          </div>
          <MetaInfo
            rating={rating}
            reviews={reviews}
            location={location}
          />
        </div>
        <p className={css.supportingText}>
          The pictures shown here are example vehicles of the respective.
        </p>
        <PageFeaturesList item={item} />
        <Button
          onClick={() => {
            onClick(item);
          }}>
          Show more
        </Button>
      </div>
    </>
  );
};

export default CamperItem;
