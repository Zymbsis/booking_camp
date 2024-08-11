import clsx from 'clsx';

const CamperTitle = ({ children, className }) => {
  return <h2 className={clsx('camperTitle', className)}>{children}</h2>;
};

export default CamperTitle;
