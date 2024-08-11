import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperList } from '@redux/campers/operations';
import {
  selectCamperList,
  selectIsLoading,
  selectHasNextPage,
} from '@redux/campers/selectors';
import { LoadMoreButton, Loader, CampersList } from 'components';
import css from './Pages.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const hasNextPage = useSelector(selectHasNextPage);
  const camperList = useSelector(selectCamperList);

  useEffect(() => {
    if (camperList.length) return;
    dispatch(getCamperList({}));
  }, [dispatch, camperList]);

  return (
    <>
      <section className={css.pageSection}>
        <Loader visible={isLoading && !camperList.length} />
        <CampersList />
        <Loader visible={isLoading && camperList.length} />
        {!isLoading &&
          (hasNextPage ? (
            <LoadMoreButton />
          ) : (
            <p className={css.catalogPagePlaceholder}>
              Here are all the search results
            </p>
          ))}
      </section>
    </>
  );
};

export default CatalogPage;
