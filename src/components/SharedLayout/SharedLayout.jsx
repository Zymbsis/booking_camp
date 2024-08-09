import { Suspense } from 'react';
import Header from '../Header/Header';

const SharedLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <Suspense> {children}</Suspense>
    </main>
  );
};

export default SharedLayout;
