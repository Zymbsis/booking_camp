import { useState } from 'react';
import Form from '../Form/Form';
import ImageCard from '../ImageCard/ImageCard';
import MetaInfo from '../MetaInfo/MetaInfo';
import css from './CamperModal.module.css';
import ReviewsComponent from '../ReviewsComponent/ReviewsComponent';
import FeaturesComponent from '../FeaturesComponent/FeaturesComponent';
import CamperPrice from '../shared/CamperPrice';
import CamperTitle from '../shared/CamperTitle';
import clsx from 'clsx';

const CamperModal = ({ item }) => {
  const [showReviews, setShowReviews] = useState(false);
  const handleShowReviews = () => {
    setShowReviews(true);
  };
  const handleShowFeatures = () => {
    setShowReviews(false);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <CamperTitle className={css.title}>{item.name}</CamperTitle>
        <MetaInfo
          rating={item.rating}
          reviews={item.reviews}
          location={item.location}
          className={css.metaInfo}
        />
        <CamperPrice className={css.price}>{item.price}</CamperPrice>
      </div>
      <div className={css.descriptionWrapper}>
        <ul className={css.imageList}>
          {item.gallery.map((image, index) => (
            <li key={index}>
              <ImageCard
                img={image}
                name={`${item.name}_${index}`}
              />
            </li>
          ))}
        </ul>
        <p className={css.description}>{item.description}</p>
        <div className={css.overviewBtnWrapper}>
          <button
            className={clsx(css.overviewBtn, {
              [css.activeOverviewBtn]: !showReviews,
            })}
            type='button'
            onClick={handleShowFeatures}>
            Features
          </button>
          <button
            className={clsx(css.overviewBtn, {
              [css.activeOverviewBtn]: showReviews,
            })}
            type='button'
            onClick={handleShowReviews}>
            Reviews
          </button>
        </div>
        <div className={css.detailsContainer}>
          {showReviews ? (
            <ReviewsComponent />
          ) : (
            <FeaturesComponent item={item} />
          )}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CamperModal;
