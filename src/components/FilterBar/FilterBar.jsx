import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams } from '@redux/campers/slice';
import { selectParams } from '@redux/campers/selectors';
import { Button, Icon } from 'shared';
import css from './FilterBar.module.css';
import { resetParams } from '../../redux/campers/slice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const { register, handleSubmit, reset } = useForm({});

  const handleReset = () => {
    dispatch(resetParams({ ...params, form: '', page: 1 }));
  };

  const onSubmit = (data) => {
    if (!data.vehicleType) return;
    dispatch(changeParams({ ...params, form: data.vehicleType, page: 1 }));
    reset();
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
        <div className={css.buttonWrapper}>
          <Button
            className={css.submitButton}
            type='submit'>
            Search
          </Button>
          <Button
            className={css.resetButton}
            onClick={handleReset}
            type='button'>
            Reset
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default FilterBar;
