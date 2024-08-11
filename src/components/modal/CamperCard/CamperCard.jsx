import { useState } from 'react';
import { CamperPrice, CamperTitle, ImageCard } from 'shared';
import CamperCardDetails from '../CamperCardDetails/CamperCardDetails';
import MetaInfo from '../../MetaInfo/MetaInfo';
import css from './CamperCard.module.css';
import clsx from 'clsx';

const CamperCard = ({ item }) => {
  const { name, rating, reviews, location, price, gallery, description } = item;
  const [showFeatures, setShowFeatures] = useState(true);
  const [visibleDescription, setVisibleDescription] = useState(false);

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
      <div className={css.descriptionContainer}>
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
        <div
          className={clsx(css.descriptionWrapper, {
            [css.visibleDescription]: visibleDescription,
          })}>
          <p className={css.description}>{description}</p>
          <span
            onClick={() => {
              setVisibleDescription(!visibleDescription);
            }}>
            ... {visibleDescription ? 'Show less' : 'Show more'}
          </span>
        </div>
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
