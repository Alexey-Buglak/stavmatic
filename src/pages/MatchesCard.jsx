import React from 'react'
import NewsPanel from '../components/NewsPanel'
import SportsLine from '../components/SportsLine'

const MatchesCard = () => {
  const match = {
    teamOne: 'HNT',
    teamTwo: 'Hamburg Towers',
    dateFull: '31 Oktober, 2023',
    dateSm: '08.12.20',
    time: '13:00',
    status: 'Завершён',
  }


  return (
    <div className='container'>
      <SportsLine />
      <div className="flex gap-x-7 mt-5">
        <div>
          <h1 className='text-3xl ml-10 w-full font-bold dark:text-dMWhite'>{match.teamOne} - {match.teamTwo}</h1>
        </div>
        <NewsPanel />
      </div>
    </div>
  )
}

export default MatchesCard
