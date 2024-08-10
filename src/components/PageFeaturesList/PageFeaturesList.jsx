import { createPageFeaturesList } from 'helpers';
import { Icon } from 'shared';
import css from './PageFeaturesList.module.css';

const PageFeaturesList = ({ item }) => {
  const featuresList = createPageFeaturesList(item);

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

export default PageFeaturesList;
