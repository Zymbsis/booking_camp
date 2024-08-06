import { Suspense } from 'react';
import SideBar from '../SideBar/SideBar';

const SharedLayout = ({ children }) => {
  return (
    <main>
      <SideBar />
      <Suspense> {children}</Suspense>
    </main>
  );
};

export default SharedLayout;
