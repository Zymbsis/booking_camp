import { capitalizeFirstLetter } from 'helpers';
import clsx from 'clsx';
import css from './InputField.module.css';

const InputField = ({
  fieldName,
  label,
  errors,
  register,
  type = 'text',
  placeholder,
  children,
  className,
  ...props
}) => {
  return (
    <label
      className={clsx(css.label, className, {
        [css.error]: errors[fieldName],
      })}>
      {label ? label : capitalizeFirstLetter(fieldName)}
      <input
        className={css.input}
        type={type}
        placeholder={
          placeholder ? placeholder : capitalizeFirstLetter(fieldName)
        }
        {...register(fieldName)}
        {...props}
      />
      {children}
      {errors[fieldName] && <span>{errors[fieldName].message}</span>}
    </label>
  );
};

export default InputField;
