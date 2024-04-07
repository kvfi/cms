import Layout from 'components/shared/layout'
import Home from 'pages/home'
import { Navigate } from 'react-router-dom'
import { APP_URLS } from 'utils/constants'

export const routes = [
  {
    path: APP_URLS.HOME,
    element: <Layout />,
    children: [
      {
        path: APP_URLS.HOME,
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]