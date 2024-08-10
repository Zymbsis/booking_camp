import ModalFeaturesList from '../FeaturesList/FeaturesList';
import VehicleDetailsList from '../VehicleDetailsList/VehicleDetailsList';
import css from './Features.module.css';

const Features = ({ item }) => {
  return (
    <div className={css.features}>
      <ModalFeaturesList item={item} />
      <VehicleDetailsList item={item} />
    </div>
  );
};

export default Features;
