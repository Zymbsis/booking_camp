import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';
import { useEffect, useState } from 'react';
import { getCamperList } from '../../redux/campers/operations';
import { selectCamperList } from '../../redux/campers/selectors';
import Button from '../shared/Button/Button';

const CamperList = () => {
  const camperList = useSelector(selectCamperList);
  const [page, setPage] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (page === null) {
      setPage(1);
      return;
    }
    dispatch(getCamperList({ page }));
  }, [dispatch, page]);

  return (
    <div className={css.wrapper}>
      <ul className={css.camperList}>
        {camperList.map((item) => (
          <li
            key={item._id}
            className={css.camperItem}>
            <CamperItem item={item} />
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        className={css.loadMoreButton}>
        Load More
      </Button>
    </div>
  );
};

export default CamperList;
