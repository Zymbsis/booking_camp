import {Container,Section} from 'shared';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section className={css.section}>
      <Container className={css.container}></Container>
    </Section>
  );
};

export default HomePage;
