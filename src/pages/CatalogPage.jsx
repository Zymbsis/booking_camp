import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '@redux/campers/selectors';
import { Loader, CampersList, FilterBar } from 'components';
import { Container, Button } from 'shared';
import {
  selectPage,
  selectParams,
  selectCamperList,
} from '@redux/campers/selectors';
import { getCampersList } from '@redux/campers/operations';
import { nextPage } from '../redux/campers/slice';
import css from './Pages.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectCamperList);
  const params = useSelector(selectParams);
  const page = useSelector(selectPage);

  const hasNextPage = camperList.length % 4 === 0;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    if (!camperList.length && page === 1) {
      dispatch(getCampersList({ page, ...params }));
      return;
    }
    if (Math.ceil(camperList.length / 4) === page) return;
    dispatch(getCampersList({ page, ...params }));
  }, [dispatch, page, params, camperList]);

  // useEffect(() => {

  // if (page <= 1) return;
  // const timer = setTimeout(() => {
  //   window.scrollBy({ top: 500, behavior: 'smooth' });
  // }, 200);
  // return () => clearTimeout(timer);
  // }, [page]);

  return (
    <Container className={css.catalogPageContainer}>
      <FilterBar />
      <section className={css.catalogPageSection}>
        {!isLoading && !camperList.length ? (
          <p>Nothing found</p>
        ) : (
          <CampersList />
        )}
        <Loader visible={isLoading} />
        {!isLoading && hasNextPage && camperList.length ? (
          <Button
            className={css.loadMoreButton}
            onClick={handleLoadMore}>
            Load More
          </Button>
        ) : null}
        {!isLoading && !hasNextPage && (
          <p className={css.catalogPagePlaceholder}>
            Here are all the search results
          </p>
        )}
      </section>
    </Container>
  );
};

export default CatalogPage;
