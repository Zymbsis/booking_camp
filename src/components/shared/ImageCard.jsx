import clsx from 'clsx';

const ImageCard = ({ img, name, width = '290', className }) => {
  return (
    <div className={clsx('imgWrapper', className)}>
      <img
        className='img'
        src={img}
        alt={name}
        width={width}
        loading='lazy'
      />
    </div>
  );
};

export default ImageCard;
