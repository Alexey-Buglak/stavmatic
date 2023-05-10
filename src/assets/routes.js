import HomePage from '../pages/HomePage'
import InfoPage from '../pages/InfoPage'

export const publicRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/info',
    Component: InfoPage,
  },
]

export const privateRoutes = [] // soon
