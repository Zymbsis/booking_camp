import clsx from 'clsx';

const CamperPrice = ({ children, className }) => {
  return <p className={clsx('camperPrice', className)}>&euro;{children}.00</p>;
};

export default CamperPrice;
