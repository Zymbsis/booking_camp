import { useState } from 'react';
import { CamperPrice, CamperTitle, ImageCard } from 'shared';
import CamperCardDetails from '../CamperCardDetails/CamperCardDetails';
import MetaInfo from '../../MetaInfo/MetaInfo';
import css from './CamperCard.module.css';

const CamperCard = ({ item }) => {
  const { name, rating, reviews, location, price, gallery, description } = item;
  const [showFeatures, setShowFeatures] = useState(true);
  const handleToggleContent = () => {
    setShowFeatures(!showFeatures);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <CamperTitle className={css.title}>{name}</CamperTitle>
        <MetaInfo
          className={css.metaInfo}
          rating={rating}
          reviews={reviews}
          location={location}
        />
        <CamperPrice className={css.price}>{price}</CamperPrice>
      </div>
      <div className={css.descriptionWrapper}>
        <ul className={css.imageList}>
          {gallery.map((image, index) => (
            <li key={index}>
              <ImageCard
                img={image}
                name={`${name}_${index}`}
              />
            </li>
          ))}
        </ul>
        <p className={css.description}>{description}</p>
        <CamperCardDetails
          item={item}
          handleToggleContent={handleToggleContent}
          showFeatures={showFeatures}
        />
      </div>
    </div>
  );
};

export default CamperCard;
