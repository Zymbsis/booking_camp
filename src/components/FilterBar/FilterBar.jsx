import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams } from '@redux/campers/slice';
import { getCampersList } from '@redux/campers/operations';
import { selectParams } from '@redux/campers/selectors';
import { Button, Icon } from 'shared';
import css from './FilterBar.module.css';

const FilterBar = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    dispatch(changeParams({ ...params, form: data.vehicleType, page: 1 }));
    dispatch(getCampersList({ ...params, form: data.vehicleType, page: 1 }));
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
