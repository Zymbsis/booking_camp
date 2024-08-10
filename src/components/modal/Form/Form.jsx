import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { bookingFormValidationSchema } from 'helpers';
import { Button } from 'shared';
import Calendar from '../Calendar/Calendar';
import clsx from 'clsx';
import css from './Form.module.css';
import InputField from '../InputField/InputField';

const Form = ({ id }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingFormValidationSchema),
    defaultValues: { name: '', email: '', bookingDate: '', comment: '' },
  });

  const onSubmit = (data) => {
    localStorage.setItem('booking', JSON.stringify({ ...data, id }));
    location.reload();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          errors={errors}
          fieldName='name'
        />
        <InputField
          register={register}
          errors={errors}
          fieldName='email'
        />
        <div
          className={clsx(css.inputWrapper, {
            [css.error]: errors.bookingDate,
          })}>
          <Calendar
            errors={errors}
            register={register}
            setValue={setValue}
          />
          {errors.bookingDate && <span>{errors.bookingDate.message}</span>}
        </div>
        <div
          className={clsx(css.textareaWrapper, {
            [css.error]: errors.comment,
          })}>
          <textarea
            placeholder='Comment'
            {...register('comment')}
          />
          {errors.comment && <span>{errors.comment.message}</span>}
        </div>
        <Button
          className={css.submitBtn}
          type='submit'>
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
