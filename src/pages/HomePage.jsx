import React from 'react'
import Leagues from '../components/mainPage/Leagues'
import CountriesMatches from '../components/mainPage/CountriesMatches'
import NewsPanel from '../components/NewsPanel'
import SportsLine from '../components/SportsLine'

export default function HomePage() {
  // Wohin geht der Link zum Zeitplan und Spielerergebnise !!??

  return (
    <div className="container ">
      <SportsLine />
      <div className="flex justify-between gap-x-5">
        <Leagues />
        <CountriesMatches />
        <NewsPanel />
      </div>
    </div>
  )
}
