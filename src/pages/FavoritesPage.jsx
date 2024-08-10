import FilterBar from '../components/FilterBar/FilterBar';

import { Container, Section } from 'shared';
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
