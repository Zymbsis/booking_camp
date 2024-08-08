import CamperList from '../components/CamperList/CamperList';
import FilterBar from '../components/FilterBar/FilterBar';
import Container from '../components/shared/Container/Container';
import Section from '../components/shared/Section/Section';

const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <FilterBar />
        <CamperList />
      </Container>
    </Section>
  );
};

export default CatalogPage;
