import HomePage from '../pages/HomePage'
import InfoPage from '../pages/InfoPage'
import MatchesCard from '../pages/MatchesCard'

export const publicRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/info/:type',
    Component: InfoPage,
  },
  {
    path: '/match/:match',
    Component: MatchesCard
  }
]

export const privateRoutes = [] // soon
