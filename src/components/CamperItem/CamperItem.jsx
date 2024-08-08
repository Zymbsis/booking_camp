import FeatureList from '../FeatureList/FeatureList';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import MetaInfo from '../MetaInfo/MetaInfo';
import Button from '../shared/Button/Button';
import css from './CamperItem.module.css';
import ImageCard from '../ImageCard/ImageCard';

const CamperItem = ({ item }) => {
  const featuresList = {
    adults: item.adults,
    transmission: item.transmission,
    engine: item.engine,
    kitchen: item.details.kitchen,
    beds: item.details.beds,
    airConditioner: item.details.airConditioner,
  };

  return (
    <>
      <ImageCard
        img={item.gallery[0]}
        name={item.name}
      />
      <div className={css.textWrapper}>
        <div>
          <div className={css.titleWrapper}>
            <h2>{item.name}</h2>
            <div className={css.priceWrapper}>
              <span>&euro;{item.price}.00</span>
              <FavoriteButton _id={item._id} />
            </div>
          </div>
          <MetaInfo
            rating={item.rating}
            reviews={item.reviews}
            location={item.location}
          />
        </div>
        <p className={css.supportingText}>
          The pictures shown here are example vehicles of the respective.
        </p>
        <FeatureList features={featuresList} />
        <Button>Show more</Button>
      </div>
    </>
  );
};

export default CamperItem;
