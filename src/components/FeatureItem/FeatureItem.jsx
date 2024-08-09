import Icon from '../shared/Icon';
import css from './FeatureItem.module.css';

const FeatureItem = ({ iconId, children }) => {
  return (
    <>
      <Icon iconId={iconId} />
      <span>{children}</span>
    </>
  );
};

export default FeatureItem;
