import { useSelector } from 'react-redux';
import { selectFavoritesList } from '@redux/campers/selectors';
import CamperItem from '../CamperItem/CamperItem';
import css from './FavoriteCampersList.module.css';

const FavoriteCampersList = () => {
  const favoriteList = useSelector(selectFavoritesList);

  return (
    <ul className={css.camperList}>
      {favoriteList.map((item) => (
        <li
          key={item.id}
          className={css.camperItem}>
          <CamperItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default FavoriteCampersList;
