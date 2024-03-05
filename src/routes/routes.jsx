import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import ErrorPage from '../pages/Erroepage'
import Property from '../pages/property/Property'
import Apartments from '../pages/Apartments/Apartments'
import ApartmentDetails from '../pages/ApartmentDetails/ApartmentDetails'
import Dashboard from '../pages/Dashboard/Dashboard'




export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/property',
        element: <Property />,
      },
      {
        path:'/apartment/:id',
        element: <ApartmentDetails />
      },
      {
        path: '/apartments',
        element: <Apartments />,
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/dashboard', element: <Dashboard />  },
    ],
  },

])