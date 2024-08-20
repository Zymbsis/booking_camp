import { Icon } from 'shared';
import css from './RadioFieldset.module.css';

const RadioFieldset = ({ register }) => {
  return (
    <fieldset>
      <legend className={css.vehicleTitle}>Vehicle type</legend>
      <div className={css.radioWrapper}>
        <label className={css.label}>
          <input
            type='radio'
            value='panelTruck'
            {...register('vehicleType')}
          />
          <Icon iconId='icon-vanType' />
          <span>Van</span>
        </label>
        <label className={css.label}>
          <input
            type='radio'
            value='fullyIntegrated'
            {...register('vehicleType')}
          />
          <Icon iconId='icon-fullyIntegratedType' />
          <span>Fully Integrated</span>
        </label>
        <label className={css.label}>
          <input
            type='radio'
            value='alcove'
            {...register('vehicleType')}
          />
          <Icon iconId='icon-alcoveType' />
          <span>Alcove</span>
        </label>
      </div>
    </fieldset>
  );
};

export default RadioFieldset;
