import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
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
          element={<NotFoundPage />}
        />
      </Routes>
    </SharedLayout>
  );
};

export default App;
