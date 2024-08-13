import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFavoritesId, selectIsLoading } from '@redux/campers/selectors';
import { selectFavoritesList } from '@redux/campers/selectors';
import { getCamperByIds } from '@redux/campers/operations';
import { FavoriteCampersList, Loader } from 'components';
import { Container } from 'shared';

import css from './Pages.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesId = useSelector(selectFavoritesId);
  const isLoading = useSelector(selectIsLoading);
  const favoritesList = useSelector(selectFavoritesList);

  useEffect(() => {
    if (favoritesId.length && favoritesList.length === 0) {
      dispatch(getCamperByIds(favoritesId));
    }
  }, [dispatch, favoritesId, favoritesList]);

  return (
    <Container className={css.favoritesPageContainer}>
      <Loader visible={isLoading && !favoritesId.length} />
      <FavoriteCampersList />
      {!favoritesId.length && !isLoading && (
        <p className={css.favoritesPagePlaceholder}>
          There`s nothing here yet... Add your favourite items to see them
          displayed on this page!
        </p>
      )}
    </Container>
  );
};

export default FavoritesPage;
