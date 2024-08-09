import { useSelector } from 'react-redux';
import CamperList from '../CamperList/CamperList';
import { selectFavoritesList } from '../../redux/campers/selectors';
// import css from './FavoriteCampersSection.module.css';

const FavoriteCampersSection = () => {
  const camperList = useSelector(selectFavoritesList);

  return <CamperList camperList={camperList} />;
};

export default FavoriteCampersSection;
