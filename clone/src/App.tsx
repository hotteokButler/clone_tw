import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import ErrorPage from './router/error_page';
import Main from './router/main';
import Profile from './router/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
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
