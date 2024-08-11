import css from './Fallback.module.css';

const Fallback = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.loader}></span>
    </div>
  );
};

export default Fallback;
