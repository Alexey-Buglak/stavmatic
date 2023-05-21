import HomePage from '../pages/HomePage'
import InfoPage from '../pages/InfoPage'
import MatchesCard from '../pages/MatchesCard'
import NewsListPage from '../pages/NewsListPage'
import NewsPage from '../pages/NewsPage'
import ViewsPage from '../pages/ViewsPage'

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
    path: '/matches/:match',
    Component: MatchesCard
  },
  {
    path: '/news', 
    Component: NewsListPage
  },
  {
    path: '/news/:id',
    Component: NewsPage
  },
  {
    path: '/views',
    Component: ViewsPage
  }
]

export const privateRoutes = [] // soon
