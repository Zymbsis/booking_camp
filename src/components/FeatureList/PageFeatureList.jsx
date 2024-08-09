import { getDataForPageFeaturesList } from '.';
import FeatureItem from '../FeatureItem/FeatureItem';
import Icon from '../shared/Icon';
import css from './PageFeatureList.module.css';

const PageFeatureList = ({ item }) => {
  const data = getDataForPageFeaturesList(item);
  return (
    <ul className={css.featureList}>
      {data.map((item, index) => (
        <li
          key={index}
          className={css.features}>
          <FeatureItem iconId={item.iconId}>{item.label}</FeatureItem>
        </li>
      ))}
      {/* <li className={css.feature}>
        <Icon iconId='icon-adults' />
        <span>{features.adults} adults</span>
      </li>

      <li className={css.feature}>
        <Icon iconId='icon-transmission' />
        <span>{features.transmission}</span>
      </li>

      <li className={css.feature}>
        <Icon iconId='icon-engine' />
        <span>{features.engine}</span>
      </li>

      {features.kitchen > 0 && (
        <li className={css.feature}>
          <Icon iconId='icon-kitchen' />
          <span>Kitchen</span>
        </li>
      )}
      <li className={css.feature}>
        <Icon iconId='icon-bed' />
        <span>{features.beds} beds</span>
      </li>

      {features.airConditioner > 0 && (
        <li className={css.feature}>
          <Icon iconId='icon-ac' />
          <span>AC</span>
        </li>
      )} */}
    </ul>
  );
};

export default PageFeatureList;
