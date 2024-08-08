import css from './ImageCard.module.css';

const ImageCard = ({ img, name }) => {
  return (
    <div className={css.imgWrapper}>
      <img
        className={css.img}
        src={img}
        alt={name}
        width={290}
      />
    </div>
  );
};

export default ImageCard;
