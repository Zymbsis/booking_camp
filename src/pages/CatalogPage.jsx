import { Container } from 'shared';
import { CampersList, FilterBar } from 'components';
import css from './Pages.module.css';

const CatalogPage = () => {
  return (
    <Container className={css.catalogPageContainer}>
      <FilterBar />
      <section className={css.catalogPageSection}>
        <CampersList />
      </section>
    </Container>
  );
};

export default CatalogPage;
