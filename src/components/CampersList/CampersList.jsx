import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperList,
  selectIsLoading,
  selectPage,
  selectParams,
} from '@redux/campers/selectors';
import { getCampersList } from '@redux/campers/operations';
import { nextPage } from '@redux/campers/slice';
import CamperItem from '../CamperItem/CamperItem';
import { Button } from 'shared';
import { Loader } from 'components';

import css from './CampersList.module.css';

const CampersList = () => {
  const dispatch = useDispatch();
  const camperList = useSelector(selectCamperList);
  const page = useSelector(selectPage);
  const params = useSelector(selectParams);
  const isLoading = useSelector(selectIsLoading);
  const isLoadMoreButtonVisible =
    Math.ceil(camperList.length / 4) === page && camperList.length % 4 === 0;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(getCampersList({ page, ...params }));
    }
  }, [params, dispatch, page]);

  useEffect(() => {
    if (page === 1 || Math.ceil(camperList.length / 4) === page) return;
    dispatch(getCampersList({ page, ...params }));
  }, [dispatch, page, params, camperList]);

  return (
    <>
      {!isLoading && camperList.length === 0 && <p>Nothing found</p>}
      {camperList.length > 0 && (
        <ul className={css.camperList}>
          {camperList.map((item) => (
            <li
              key={item.id}
              className={css.camperItem}>
              <CamperItem item={item} />
            </li>
          ))}
        </ul>
      )}
      <Loader visible={isLoading} />

      {!isLoading && isLoadMoreButtonVisible && (
        <Button
          className={css.loadMoreButton}
          onClick={handleLoadMore}>
          Load More
        </Button>
      )}
      {!isLoadMoreButtonVisible && camperList.length > 0 && !isLoading && (
        <p className={css.catalogPagePlaceholder}>
          Here are all the search results
        </p>
      )}
    </>
  );
};

export default CampersList;
