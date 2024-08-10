import { useDispatch, useSelector } from 'react-redux';
import css from './FavoriteCamperList.module.css';
import {
  selectFavoritesId,
  selectFavoritesList,
} from '../../redux/campers/selectors';
import CamperItem from '../CamperItem/CamperItem';
import { useEffect } from 'react';
import { getCamperById } from '../../redux/campers/operations';
import { useModal } from 'helpers';

import CamperCard from '../modal/CamperCard/CamperCard';

const FavoriteCamperList = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const favoriteList = useSelector(selectFavoritesList);
  const favoritesId = useSelector(selectFavoritesId);
  const handleShowMore = (item) => {
    openModal(<CamperCard item={item} />);
  };

  useEffect(() => {
    favoritesId.forEach((item) => {
      dispatch(getCamperById(item));
    });
  }, [dispatch, favoritesId]);

  return (
    <>
      <ul className={css.camperList}>
        {favoriteList.map((item) => (
          <li
            key={item.id}
            className={css.camperItem}>
            <CamperItem
              item={item}
              onClick={handleShowMore}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FavoriteCamperList;
