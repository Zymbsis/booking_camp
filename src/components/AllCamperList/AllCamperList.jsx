import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import css from './AllCamperList.module.css';
import { selectCamperList, selectPage } from '../../redux/campers/selectors';
import { getCamperList } from '../../redux/campers/operations';
import { useEffect } from 'react';
import { increasePage } from '../../redux/campers/slice';
import { useModal } from '../ModalProvider';

import CamperModal from '../CamperModal/CamperModal';

const AllCamperList = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const camperList = useSelector(selectCamperList);
  const page = useSelector(selectPage);

  const handleLoadMore = () => {
    dispatch(increasePage());
    dispatch(getCamperList({ page }));
  };

  const handleShowMore = (item) => {
    openModal(<CamperModal item={item} />);
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(increasePage());
      dispatch(getCamperList({}));
    }
  }, [dispatch, page]);

  return (
    <div className={css.wrapper}>
      <ul className={css.camperList}>
        {camperList.map((item) => (
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
      <LoadMoreButton onClick={handleLoadMore} />
    </div>
  );
};

export default AllCamperList;
