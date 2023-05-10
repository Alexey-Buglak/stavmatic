import { createSlice } from '@reduxjs/toolkit'
import deFlag from '../../../imgs/deFlag.svg'

const initialState = {
  teams: [
    {
      name: 'Deutschland',
      flag: deFlag
    },
  ],
  loading: false,
}




export const myTeamsSlice = createSlice({
  name: 'myTeams',
  initialState,
  reducers: {
    addTeam: (state, team) => {
      state.teams.push(team)
      window.localStorage.teams = state.teams
    },
    deleteTeam: (state, team) => {
      state.teams = state.teams.map(e => e !== team)
      window.localStorage.teams = state.teams
    },
    loadTeams: (state) => {
      state.teams = window.localStorage.teams
    }
  },
})



export const { addTeam, deleteTeam, loadTeams } = myTeamsSlice.actions
export default myTeamsSlice.reducer
