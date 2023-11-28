import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import ErrorPage from './router/error_page';
import Login from './router/login';
import CreateAccount from './router/create_account';
import Home from './router/home';
import Profile from './router/profile';
import { GlobalStyle } from './components/styled';
import LoadingScreen from './components/loading';

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
    path: '/sign-in',
    element: <CreateAccount />,
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    //wait for firebase

    setIsLoading(false);
  };

  useEffect(() => {
    init().then((res) => console.log(res));
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
