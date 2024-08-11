import { DNA } from 'react-loader-spinner';

const Loader = ({
  visible,
  h = '100',
  w = '100',
  wrapperStyle,
  wrapperClass,
}) => {
  return (
    <DNA
      visible={visible}
      height={h}
      width={w}
      ariaLabel='dna-loading'
      wrapperStyle={{ wrapperStyle }}
      wrapperClass={wrapperClass}
    />
  );
};

export default Loader;
