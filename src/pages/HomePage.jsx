import Container from '../components/shared/Container';
import Section from '../components/shared/Section';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section className={css.section}>
      <Container className={css.container}></Container>
    </Section>
  );
};

export default HomePage;
