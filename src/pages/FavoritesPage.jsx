import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../redux/campers/operations';
import { selectFavoritesId } from '../redux/campers/selectors';
import Section from '../components/shared/Section/Section';
import Container from '../components/shared/Container/Container';
import FilterBar from '../components/FilterBar/FilterBar';
import FavoriteCampersSection from '../components/FavoriteCampersSection/FavoriteCampersSection';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesId = useSelector(selectFavoritesId);
  useEffect(() => {
    favoritesId.forEach((item) => {
      dispatch(getCamperById(item));
    });
  }, [dispatch, favoritesId]);

  return (
    <Section>
      <Container>
        <FilterBar />
        <FavoriteCampersSection />
      </Container>
    </Section>
  );
};

export default FavoritesPage;
