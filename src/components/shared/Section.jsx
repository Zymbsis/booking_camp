import clsx from 'clsx';

const Section = ({ children, className }) => {
  return <section className={clsx('section', className)}>{children}</section>;
};

export default Section;
