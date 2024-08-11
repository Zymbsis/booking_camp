import { Suspense } from 'react';
import { Section, Container } from 'shared';
import { Fallback, Header, FilterBar } from 'components';

const SharedLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <Section>
        <Container>
          <FilterBar />
          <Suspense fallback={<Fallback />}>{children}</Suspense>
        </Container>
      </Section>
    </main>
  );
};

export default SharedLayout;
