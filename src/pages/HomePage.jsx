import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Leagues from '../components/mainPage/Leagues'
import CountriesMatches from '../components/mainPage/CountriesMatches'
import NewsPanel from '../components/NewsPanel'

export default function HomePage() {
  // Wohin geht der Link zum Zeitplan und Spielerergebnise !!??

  return (
    <div className="container ">
      <div className="flex flex-wrap md:text-xs justify-start gap-x-1 text-blue dark:text-dMWhite my-3">
        <NavLink to="/football">Футбол,</NavLink>
        <NavLink to="/basketball">Баскетбол,</NavLink>
        <NavLink to="/hokey">Хоккей,</NavLink>
        <NavLink to="/tennis">Теннис,</NavLink>
        <NavLink to="/voleyball">Волейбол,</NavLink>
        <NavLink to="/handball">Гандбол.</NavLink>
        <NavLink to="/">Расписание и результаты матчей.</NavLink>
        <NavLink to="/statistics">Спортивная статистика.</NavLink>
      </div>
      <div className="flex justify-between gap-x-5">
        <Leagues />
        <CountriesMatches />
        <NewsPanel />
      </div>
    </div>
  )
}
