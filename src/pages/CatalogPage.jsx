import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '@redux/campers/selectors';
import { Loader, CampersList, FilterBar } from 'components';
import { Container, Button } from 'shared';
import { changePage } from '@redux/campers/slice';
import {
  selectPage,
  selectParams,
  selectCamperList,
} from '@redux/campers/selectors';
import { getCampersList } from '@redux/campers/operations';
import css from './Pages.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectCamperList);
  const params = useSelector(selectParams);
  const page = useSelector(selectPage);
  const hasNextPage = camperList.length % 4 === 0;

  const handleLoadMore = () => {
    dispatch(changePage(page + 1));
  };

  useEffect(() => {
    if (page === null) {
      dispatch(changePage(1));
      return;
    }
    if (Math.ceil(camperList.length / params.limit) === page) return;
    dispatch(getCampersList(params));
  }, [dispatch, params, page, camperList]);

  // useEffect(() => {
  //   if (page <= 1) return;
  //   const timer = setTimeout(() => {
  //     window.scrollBy({ top: 500, behavior: 'smooth' });
  //   }, 200);
  //   return () => clearTimeout(timer);
  // }, [page]);

  return (
    <Container className={css.catalogPageContainer}>
      <FilterBar />
      <section className={css.catalogPageSection}>
        <CampersList />
        <Loader visible={isLoading} />
        {!isLoading &&
          (hasNextPage ? (
            <Button
              className={css.loadMoreButton}
              onClick={handleLoadMore}>
              Load More
            </Button>
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
