import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getInitialCamperList } from '@redux/campers/operations';
import { changeParams } from '@redux/campers/slice';
import { Button, Icon } from 'shared';
import css from './FilterBar.module.css';

const FilterBar = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    dispatch(changeParams(data.vehicleType));
    dispatch(
      getInitialCamperList({ page: 1, limit: 4, form: data.vehicleType }),
    );
  };
  return (
    <aside className={css.filterBar}>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}>
        <p className={css.vehicleTitle}>Vehicle type</p>
        <div className={css.radioWrapper}>
          <label className={css.label}>
            <input
              hidden={true}
              type='radio'
              value='panelTruck'
              {...register('vehicleType')}
            />
            <Icon iconId='icon-vanType' />
            <span> Van</span>
          </label>
          <label className={css.label}>
            <input
              hidden={true}
              type='radio'
              value='fullyIntegrated'
              {...register('vehicleType')}
            />
            <Icon iconId='icon-fullyIntegratedType' />
            <span> Fully Integrated</span>
          </label>
          <label className={css.label}>
            <input
              hidden={true}
              type='radio'
              value='alcove'
              {...register('vehicleType')}
            />
            <Icon iconId='icon-alcoveType' />
            <span> Alcove</span>
          </label>
        </div>
        <Button
          className={css.submitButton}
          type='submit'>
          Search
        </Button>
      </form>
    </aside>
  );
};

export default FilterBar;
