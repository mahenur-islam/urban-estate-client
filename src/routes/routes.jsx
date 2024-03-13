import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import ErrorPage from '../pages/Erroepage'
import Dashboard from '../pages/Dashboard/Dashboard'
import AddProperty from '../pages/AddProperty/AddProperty'
import Blog from '../pages/Blog/Blog'
import Properties from '../pages/Properties/Properties'
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails'




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
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/add-property',
        element: <AddProperty />,
      },
      {
        path:'/property/:id',
        element: <PropertyDetails />
      },
      {
        path: '/properties',
        element: <Properties />,
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/dashboard', element: <Dashboard />  },
    ],
  },

])