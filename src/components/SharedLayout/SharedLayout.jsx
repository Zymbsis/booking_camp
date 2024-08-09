import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const SharedLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </main>
  );
};

export default SharedLayout;
