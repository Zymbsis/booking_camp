import FilterBar from '../components/FilterBar/FilterBar';

import { Container, Section } from 'shared';

import AllCamperList from '../components/AllCamperList/AllCamperList';

const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <FilterBar />
        <AllCamperList />
      </Container>
    </Section>
  );
};

export default CatalogPage;
