import { useModal } from 'helpers';
import { ImageCard, CamperTitle, CamperPrice, Button } from 'shared';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import CamperCard from '../modal/CamperCard/CamperCard';
import MetaInfo from '../MetaInfo/MetaInfo';
import FeaturesList from '../FeaturesList/FeaturesList';
import css from './CamperItem.module.css';

const CamperItem = ({ item }) => {
  const { name, price, id, rating, reviews, location, gallery } = item;
  const { openModal } = useModal();
  const handleShowMore = () => {
    openModal(<CamperCard item={item} />);
  };

  const handleShowImage = () => {
    openModal(
      <div className={css.modalImg}>
        <ImageCard
          img={gallery[0]}
          name={name}
        />
      </div>,
    );
  };

  return (
    <>
      <ImageCard
        img={gallery[0]}
        name={name}
        onClick={handleShowImage}
      />
      <div className={css.textWrapper}>
        <div>
          <div className={css.titleWrapper}>
            <CamperTitle className={css.title}>{name}</CamperTitle>
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
        <FeaturesList item={item} />
        <Button
          onClick={handleShowMore}
          className={css.showMoreButton}>
          Show more
        </Button>
      </div>
    </>
  );
};

export default CamperItem;
