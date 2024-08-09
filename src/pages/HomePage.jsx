import Container from '../components/shared/Container/Container';
import Section from '../components/shared/Section/Section';
// import img from '../images/test.webp';
import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <Section className={css.section}>
      <div className={css.container}></div>
    </Section>
  );
};

export default HomePage;
