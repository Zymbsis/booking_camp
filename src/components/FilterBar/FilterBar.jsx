import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams } from '@redux/campers/slice';
import { selectParams } from '@redux/campers/selectors';
import { Icon } from 'shared';
import css from './FilterBar.module.css';
import clsx from 'clsx';
import InputField from '../modal/InputField/InputField';
import RadioFieldset from './RadioFieldset/RadioFieldset';
import FormButton from './FormButton/FormButton';

const FilterBar = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: { vehicleType: '', location: '' },
    values: { vehicleType: params.form, location: params.location },
  });

  const handleReset = () => {
    if (params.form || params.location) {
      dispatch(changeParams({ ...params, page: null, form: '', location: '' }));
    }
    setValue('vehicleType', '');
    setValue('location', '');
  };

  const onSubmit = (data) => {
    if (!data.vehicleType && data.location.trim() === '') return;
    dispatch(
      changeParams({
        ...params,
        page: null,
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
        <InputField
          className={css.inputField}
          register={register}
          errors={errors}
          fieldName='location'
          placeholder='City'>
          <Icon
            className={clsx(css.inputFieldIcon, {
              [css.activeInputFieldIcon]: watch('location'),
            })}
            iconId='icon-location'
          />
        </InputField>
        <p className={css.filters}>Filters</p>
        <RadioFieldset register={register} />
        <FormButton
          handleReset={handleReset}
          watch={watch}
        />
      </form>
    </aside>
  );
};

export default FilterBar;
