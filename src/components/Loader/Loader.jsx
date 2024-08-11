import { DNA } from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <DNA
      visible={visible}
      height='100'
      width='100'
      ariaLabel='dna-loading'
    />
  );
};

export default Loader;
