import { capitalizeFirstLetter } from 'helpers';
import clsx from 'clsx';
import css from './InputField.module.css';

const InputField = ({
  fieldName,
  errors,
  register,
  type = 'text',
  placeholder,
  children,
  ...props
}) => {
  return (
    <div className={clsx(css.inputWrapper, { [css.error]: errors[fieldName] })}>
      <input
        type={type}
        placeholder={
          placeholder ? placeholder : capitalizeFirstLetter(fieldName)
        }
        {...register(fieldName)}
        {...props}
      />
      {children}
      {errors[fieldName] && <span>{errors[fieldName].message}</span>}
    </div>
  );
};

export default InputField;
