import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/catalog'
          element={<CatalogPage />}
        />
        <Route
          path='/favorites'
          element={<FavoritesPage />}
        />
        <Route
          path='*'
          element={
            <Navigate
              to='/'
              replace
            />
          }
        />
      </Routes>
    </SharedLayout>
  );
};

export default App;
