import FilterBar from '../components/FilterBar/FilterBar';

import Section from '../components/shared/Section';
import Container from '../components/shared/Container';

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
