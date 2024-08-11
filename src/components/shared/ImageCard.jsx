import clsx from 'clsx';

const ImageCard = ({ img, name, width = '290', className, onClick }) => {
  return (
    <div
      className={clsx('imgWrapper', className)}
      onClick={onClick}>
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
