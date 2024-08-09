import clsx from 'clsx';

const Section = ({ children, className }) => {
  return (
    <section className={clsx('section', { [className]: className })}>
      {children}
    </section>
  );
};

export default Section;
