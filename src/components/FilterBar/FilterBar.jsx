import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams } from '@redux/campers/slice';
import { selectParams } from '@redux/campers/selectors';
import { Button, Icon } from 'shared';
import css from './FilterBar.module.css';
import clsx from 'clsx';
import InputField from '../modal/InputField/InputField';

const FilterBar = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  const handleReset = () => {
    dispatch(changeParams({ ...params, page: 1, form: '', location: '' }));
    setValue('vehicleType', '');
    setValue('location', '');
  };

  const onSubmit = (data) => {
    console.log(data);

    if (!data.vehicleType && data.location.trim() === '') return;
    dispatch(
      changeParams({
        ...params,
        page: 1,
        form: data.vehicleType,
        location: data.location,
      }),
    );
  };

  return (
    <aside className={css.filterBar}>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}>
        <label className={css.inputField}>
          <InputField
            register={register}
            errors={errors}
            fieldName='location'
            placeholder='City'
          />
        </label>

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
            className={clsx(css.resetButton, {})}
            onClick={handleReset}
            disabled={!params.form && !params.location}
            type='button'>
            Reset
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default FilterBar;
