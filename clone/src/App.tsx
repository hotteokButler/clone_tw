import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import ErrorPage from './router/error_page';
import Home from './router/home';
import Profile from './router/profile';
import Login from './router/login';
import CreateAccount from './router/create_account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
