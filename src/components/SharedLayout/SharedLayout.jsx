import { Suspense } from 'react';

import Header from '../SideBar/SideBar';


const SharedLayout = ({ children }) => {

  return (
    <main>
      {/* <Header /> */}
      <Suspense> {children}</Suspense>
    </main>
  );
};

export default SharedLayout;
