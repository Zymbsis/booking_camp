import { useSelector } from 'react-redux';
import { selectCamperList } from '@redux/campers/selectors';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

const CampersList = () => {
  const camperList = useSelector(selectCamperList);

  return (
    <>
      <ul className={css.camperList}>
        {camperList.map((item) => (
          <li
            key={item.id}
            className={css.camperItem}>
            <CamperItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CampersList;
