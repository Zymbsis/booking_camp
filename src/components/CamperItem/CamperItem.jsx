import FavoriteButton from '../FavoriteButton/FavoriteButton';
import MetaInfo from '../MetaInfo/MetaInfo';
import css from './CamperItem.module.css';
import ImageCard from '../ImageCard/ImageCard';
import Button from '../shared/Button';
import CamperTitle from '../shared/CamperTitle';
import CamperPrice from '../shared/CamperPrice';
import PageFeatureList from '../FeatureList/PageFeatureList';

const CamperItem = ({ item, onClick }) => {
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
            <CamperTitle>{item.name}</CamperTitle>
            <div className={css.priceWrapper}>
              <CamperPrice>{item.price}</CamperPrice>
              <FavoriteButton id={item.id} />
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
        <PageFeatureList
          features={featuresList}
          item={item}
        />
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
