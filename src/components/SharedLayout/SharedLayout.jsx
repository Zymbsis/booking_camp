import { Suspense } from 'react';
import { Fallback, Header } from 'components';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <section className={css.mainSection}>
          <Suspense fallback={<Fallback />}>{children}</Suspense>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;
