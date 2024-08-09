import FilterBar from '../components/FilterBar/FilterBar';
import Section from '../components/shared/Section';
import Container from '../components/shared/Container';
import FavoriteCamperList from '../components/FavoriteCamperList/FavoriteCamperList';

const FavoritesPage = () => {
  return (
    <Section>
      <Container>
        <FilterBar />
        <FavoriteCamperList />
      </Container>
    </Section>
  );
};

export default FavoritesPage;
