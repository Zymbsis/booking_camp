import { createVehicleDetailsList } from 'helpers';
import css from './VehicleDetailsList.module.css';

const VehicleDetailsList = ({ item }) => {
  const vehicleDetailsList = createVehicleDetailsList(item);

  return (
    <div>
      <p className={css.vehicleTitle}>Vehicle details</p>
      <ul className={css.vehicleList}>
        {vehicleDetailsList.map((vehicleDetail, index) => (
          <li
            className={css.vehicleItem}
            key={index}>
            <span>{vehicleDetail.key}</span>
            <span>{vehicleDetail.property}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleDetailsList;
