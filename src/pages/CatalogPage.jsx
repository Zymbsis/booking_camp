import FilterBar from '../components/FilterBar/FilterBar';
import Container from '../components/shared/Container/Container';
import Section from '../components/shared/Section/Section';
import CatalogCampersSection from '../components/CatalogCampersSection/CatalogCampersSection';

const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <FilterBar />
        <CatalogCampersSection />
      </Container>
    </Section>
  );
};

export default CatalogPage;
