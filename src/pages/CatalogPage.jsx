import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperList,
  selectIsLoading,
  selectHasNextPage,
} from '@redux/campers/selectors';
import { getInitialCamperList } from '@redux/campers/operations';
import { LoadMoreButton, Loader, CampersList, FilterBar } from 'components';
import { Container } from 'shared';
import css from './Pages.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const hasNextPage = useSelector(selectHasNextPage);
  const camperList = useSelector(selectCamperList);

  useEffect(() => {
    if (camperList.length) return;
    dispatch(getInitialCamperList({ page: 1, limit: 4, form: '' }));
  }, [dispatch, camperList]);

  return (
    <Container className={css.catalogPageContainer}>
      <FilterBar />
      <section className={css.catalogPageSection}>
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
    </Container>
  );
};

export default CatalogPage;
