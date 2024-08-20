import clsx from 'clsx';
import css from './FormButton.module.css';

const FormButton = ({ handleReset, watch }) => {
  return (
    <ul className={css.buttonWrapper}>
      <li>
        <button
          className={css.submitButton}
          type='submit'>
          Search
        </button>
      </li>
      <li>
        <button
          className={clsx(css.resetButton, {
            [css.visible]: watch('vehicleType') || watch('location'),
          })}
          onClick={handleReset}
          type='button'>
          Reset
        </button>
      </li>
    </ul>
  );
};

export default FormButton;
