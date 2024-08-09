import FeatureItem from '../FeatureItem/FeatureItem';

import css from './PageFeatureList.module.css';

const ModalFeatureList = ({ features }) => {
  return (
    <ul className={css.featureList}>
      <li className={css.features}>
        <FeatureItem iconId='icon-adults'>{features.adults} adults</FeatureItem>
      </li>
      <li className={css.features}>
        <FeatureItem iconId='icon-transmission'>
          {features.transmission}
        </FeatureItem>
      </li>
      {features.airConditioner > 0 && (
        <li className={css.features}>
          <FeatureItem iconId='icon-AC'>AC</FeatureItem>
        </li>
      )}
      <li className={css.features}>
        <FeatureItem iconId='icon-engine'>
          {features.engine.replace(
            features.engine[0],
            features.engine[0].toUpperCase(),
          )}
        </FeatureItem>
      </li>
      {features.kitchen > 0 && (
        <li className={css.features}>
          <FeatureItem iconId='icon-kitchen'>Kitchen</FeatureItem>
        </li>
      )}
      <li className={css.features}>
        <FeatureItem iconId='icon-beds'>{features.beds} beds</FeatureItem>
      </li>
      {features.airConditioner > 0 && (
        <li className={css.features}>
          <FeatureItem iconId='icon-airConditioner'>
            {features.airConditioner} air conditioner
          </FeatureItem>
        </li>
      )}
      {features.CD > 0 && (
        <li className={css.features}>
          <FeatureItem iconId='icon-cdSystem'>CD</FeatureItem>
        </li>
      )}
      {features.radio > 0 && (
        <li className={css.features}>
          {' '}
          <FeatureItem iconId='icon-radio'>Radio</FeatureItem>
        </li>
      )}
      {features.hob > 0 && (
        <li className={css.features}>
          {' '}
          <FeatureItem iconId='icon-hob'>{features.hob} hob</FeatureItem>
        </li>
      )}
      {features.microwave > 0 && (
        <li className={css.features}>
          <FeatureItem iconId='icon-microwave'>
            {features.microwave} microwave
          </FeatureItem>
        </li>
      )}
      {features.freezer > 0 && (
        <li className={css.features}>
          {' '}
          <FeatureItem iconId='icon-freezer'>Freezer</FeatureItem>
        </li>
      )}
      {features.toilet > 0 && (
        <li className={css.features}>
          {' '}
          <FeatureItem iconId='icon-toilet'>Toilet</FeatureItem>
        </li>
      )}
      {features.shower > 0 && (
        <li className={css.features}>
          {' '}
          <FeatureItem iconId='icon-shower'>Shower</FeatureItem>
        </li>
      )}
      {features.gas[0] > 0 && (
        <li className={css.features}>
          <FeatureItem iconId='icon-gas'>Gas</FeatureItem>
        </li>
      )}
      {features.water[0] > 0 && (
        <li className={css.features}>
          {' '}
          <FeatureItem iconId='icon-water'>Water</FeatureItem>
        </li>
      )}
    </ul>
  );
};

export default ModalFeatureList;
