import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from '../../redux/campers/slice';
import { selectFavoritesList } from '../../redux/campers/selectors';
import Icon from '../shared/Icon/Icon';
import { clsx } from 'clsx';
import css from './FavoriteButton.module.css';

const FavoriteButton = ({ _id }) => {
  const dispatch = useDispatch();
  const favoritesList = useSelector(selectFavoritesList);

  const [isChecked, setIsChecked] = useState(() =>
    favoritesList.some((item) => item === _id),
  );

  const handleChange = ({ target: { checked } }) => {
    setIsChecked(checked);
    if (checked) {
      dispatch(addToFavorite(_id));
    } else {
      dispatch(deleteFromFavorite(_id));
    }
  };

  return (
    <>
      <input
        className={css.heartCheckbox}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <Icon
        iconId='icon-heart'
        className={clsx(css.heartIcon, { [css.active]: isChecked })}
      />
    </>
  );
};

export default FavoriteButton;
