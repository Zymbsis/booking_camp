import Icon from '../shared/Icon/Icon';
import css from './FeatureItem.module.css';

const FeatureItem = ({ iconId, label }) => {
  return (
    <li className={css.feature}>
      <Icon iconId={iconId} />
      <span>{label}</span>
    </li>
  );
};

export default FeatureItem;
