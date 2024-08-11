import { Suspense } from 'react';
import { Section } from 'shared';
import { Fallback, Header } from 'components';

const SharedLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <Section>
        <Suspense fallback={<Fallback />}>{children}</Suspense>
      </Section>
    </main>
  );
};

export default SharedLayout;
