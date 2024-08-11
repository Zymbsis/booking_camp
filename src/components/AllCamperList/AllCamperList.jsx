import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import css from './AllCamperList.module.css';
import {
  selectCamperList,
  selectIsLoading,
  selectPage,
} from '../../redux/campers/selectors';
import { getCamperList } from '../../redux/campers/operations';
import { useEffect } from 'react';
import { useModal } from 'helpers';

import CamperCard from '../modal/CamperCard/CamperCard';
import Loader from '../Loader/Loader';

const AllCamperList = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const camperList = useSelector(selectCamperList);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);

  const handleLoadMore = () => {
    dispatch(getCamperList({ page }));
  };

  const handleShowMore = (item) => {
    openModal(<CamperCard item={item} />);
  };

  useEffect(() => {
    if (camperList.length === 0) {
      dispatch(getCamperList({}));
    }
  }, [dispatch, camperList]);

  return (
    <section className={css.wrapper}>
      <Loader visible={isLoading && !camperList.length} />
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
      <Loader visible={isLoading && camperList.length} />
      {!isLoading && <LoadMoreButton onClick={handleLoadMore} />}
    </section>
  );
};

export default AllCamperList;
