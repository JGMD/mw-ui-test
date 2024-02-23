import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from '../header/Header';
import Task2 from '../task2/Task2';

import { QueryClient, QueryClientProvider } from 'react-query';
import styles from './App.module.scss';

/*
 * Available endpoints
 * http://localhost:8000/api/tags - to return all tags in
 * http://localhost:8000/api/tags?tag=fe - to return matching tags
 * http://localhost:8000/api/cars - to return all cars
 * http://localhost:8000/api/cars?tag=ferrari - to return matching cars
 */

// TODO: move to a separate file Layout.tsx
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

// TODO: move to a separate file Routes.tsx
const routes = createRoutesFromElements(
  <Route id={'layout'} path="/" element={<Layout />}>
    <Route index path=":tag?" Component={Task2} />
  </Route>
);

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
