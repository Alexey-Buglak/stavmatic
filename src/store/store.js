import { configureStore } from '@reduxjs/toolkit'
import myTeamsReducer  from './features/myTeams/myTeamsSlise'
import countriesReducer  from './features/countries/countriesSlise'

export const store = configureStore({
  reducer: {
    myTeams: myTeamsReducer,
    countries: countriesReducer
  },
})
