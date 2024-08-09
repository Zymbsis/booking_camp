import ModalFeatureList from '../FeatureList/ModalFeatureList';
import css from './FeaturesComponent.module.css';

const FeaturesComponent = ({ item }) => {
  const features = {
    adults: item.adults,
    transmission: item.transmission,
    airConditioner: item.details.airConditioner,
    engine: item.engine,
    kitchen: item.details.kitchen,
    beds: item.details.beds,
    CD: item.details.CD,
    radio: item.details.radio,
    hob: item.details.hob,
    microwave: item.details.microwave,
    freezer: item.details.freezer,
    toilet: item.details.toilet,
    shower: item.details.shower,
    gas: item.details.gas,
    water: item.details.water,
  };
  return (
    <div className={css.features}>
      <ModalFeatureList features={features} />
    </div>
  );
};

export default FeaturesComponent;
