import Features from '../Features/Features';
import Form from '../Form/Form';
import Reviews from '../Reviews/Reviews';

import clsx from 'clsx';
import css from './CamperCardDetails.module.css';

const CamperCardDetails = ({ item, handleToggleContent, showFeatures }) => {
  return (
    <>
      <div className={css.overviewBtnWrapper}>
        <button
          className={clsx(css.overviewBtn, {
            [css.activeOverviewBtn]: showFeatures,
          })}
          type='button'
          disabled={showFeatures}
          onClick={handleToggleContent}>
          Features
        </button>
        <button
          className={clsx(css.overviewBtn, {
            [css.activeOverviewBtn]: !showFeatures,
          })}
          type='button'
          disabled={!showFeatures}
          onClick={handleToggleContent}>
          Reviews
        </button>
      </div>
      <div className={css.detailsContainer}>
        {showFeatures ? (
          <Features item={item} />
        ) : (
          <Reviews reviews={item.reviews} />
        )}
        <Form id={item.id} />
      </div>
    </>
  );
};

export default CamperCardDetails;
