import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';

const CamperList = ({ camperList }) => {
  return (
    <ul className={css.camperList}>
      {camperList.map((item) => (
        <li
          key={item.id}
          className={css.camperItem}>
          <CamperItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
