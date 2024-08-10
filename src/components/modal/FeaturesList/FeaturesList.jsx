import { createModalFeaturesList } from 'helpers';
import { Icon } from 'shared';
import css from './FeaturesList.module.css';

const FeaturesList = ({ item }) => {
  const featuresList = createModalFeaturesList(item);

  return (
    <ul className={css.featuresList}>
      {featuresList.map((feature, index) => (
        <li
          className={css.feature}
          key={index}>
          <Icon
            className={css.featuresIcon}
            iconId={feature.iconId}
          />
          <span className={css.featuresLabel}>{feature.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
