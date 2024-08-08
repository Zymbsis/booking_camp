import Icon from '../shared/Icon/Icon';
import css from './FeatureList.module.css';

const FeatureList = ({ features }) => {
  return (
    <ul className={css.featureList}>
      <li className={css.feature}>
        <Icon iconId='icon-adults' />
        <span>{features.adults} adults</span>
      </li>

      <li className={css.feature}>
        <Icon iconId='icon-transmission' />
        <span> {features.transmission}</span>
      </li>

      <li className={css.feature}>
        <Icon iconId='icon-engine' />
        <span> {features.engine}</span>
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
      )}
    </ul>
  );
};

export default FeatureList;
