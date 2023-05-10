import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: [
    {
      name: 'Deutschland',
      leagues: [
        { name: 'Лига 2', fav: true },
        { name: 'Первый дивизион', fav: false },
      ],
    },
    {
      name: 'Italien',
      leagues: [
        { name: 'Лига 2', fav: true },
        { name: 'Первый дивизион', fav: false },
      ],
    },
  ],
  loading: false,
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
})

// export const {  } = countriesSlice.actions
export default countriesSlice.reducer
