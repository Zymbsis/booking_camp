import { useDispatch, useSelector } from 'react-redux';
import css from './FavoriteCamperList.module.css';
import {
  selectFavoritesId,
  selectFavoritesList,
  selectIsLoading,
} from '../../redux/campers/selectors';
import CamperItem from '../CamperItem/CamperItem';
import { useEffect } from 'react';
import { getCamperByIds } from '../../redux/campers/operations';
import { useModal } from 'helpers';

import CamperCard from '../modal/CamperCard/CamperCard';
import Loader from '../Loader/Loader';

const FavoriteCamperList = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const favoriteList = useSelector(selectFavoritesList);
  const favoritesId = useSelector(selectFavoritesId);
  const isLoading = useSelector(selectIsLoading);
  const handleShowMore = (item) => {
    openModal(<CamperCard item={item} />);
  };

  useEffect(() => {
    if (!favoritesId.length) return;
    dispatch(getCamperByIds(favoritesId));
  }, [dispatch, favoritesId]);

  return (
    <section className={css.wrapper}>
      <Loader visible={isLoading && !favoriteList.length} />
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
      {!favoriteList.length && !isLoading && (
        <p className={css.placeholder}>
          There`s nothing here yet... Add your favourite items to see them
          displayed on this page!
        </p>
      )}
    </section>
  );
};

export default FavoriteCamperList;
