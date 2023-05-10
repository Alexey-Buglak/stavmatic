import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import premLig from '../imgs/premLig.svg'
import LigOne from '../imgs/Lig1.svg'
import BundesLiga from '../imgs/deFlag.svg'
import Eredivisie from '../imgs/EredLig.svg'
import LaLiga from '../imgs/LaLiga.svg'
import PlanetLig from '../imgs/PlanetLig.svg'
import starBlue from '../imgs/starBlue.svg'
import emptyStar from '../imgs/starBlueEmpty.svg'
import { loadTeams } from '../store/features/myTeams/myTeamsSlise'

const Leagues = () => {
  const dispatch = useDispatch()
  // dispatch(loadTeams())

  const [ openCountry, setOpenCountry] = useState(null)
  const { countries } = useSelector((state) => state.countries)
  const { teams } = useSelector((state) => state.myTeams)
  const leagues = [
    { path: '/league/', name: 'Premier league', icon: premLig },
    { path: '/league/', name: 'Ligue 1', icon: LigOne },
    { path: '/league/', name: 'Bundesliga', icon: BundesLiga },
    { path: '/league/', name: 'Eredivisie', icon: Eredivisie },
    { path: '/league/', name: 'LaLiga', icon: LaLiga },
    { path: '/league/', name: 'Africa Cup Of Nations', icon: PlanetLig },
    { path: '/league/', name: 'Euro', icon: PlanetLig },
    { path: '/league/', name: 'Champions League', icon: PlanetLig },
    { path: '/league/', name: 'Europa League', icon: PlanetLig },
  ]

  return (
    <div className="border dark:text-dMWhite text-darkBlue text-xs border-darkWhite dark:border-[#2F3340] py-2 px-4 rounded-[4px] w-max">
      <div>
        <h1 className="uppercase dark:text-dMLightBlue text-blue font-semibold text-sm">
          Популярные Лиги
        </h1>
        <span className="h-[1px] dark:bg-[#2F3340] block my-2 bg-[#E4E7EC]"></span>
        <ul>
          {leagues.map((e) => (
            <NavLink
              key={e.name}
              className="mb-3 flex items-center justify-start gap-x-2"
            >
              <img src={e.icon} alt="icon" />
              {e.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="flex gap-x-2 uppercase dark:text-dMLightBlue text-blue font-semibold text-sm">
          <img src={starBlue} alt="Yes" /> Мои команды
        </h1>
        <span className="h-[1px] block my-2 dark:bg-[#2F3340] bg-[#E4E7EC]"></span>
        <ul>
          {teams?.map((e) => (
            <li
              key={e.name}
              className="flex items-center justify-start gap-x-2"
            >
              <img src={e.flag} className="min-h-5" alt="icon" />
              {e.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 mb-20">
        <h1 className="flex gap-x-2 uppercase dark:text-dMLightBlue text-blue font-semibold text-sm">
          Страны
        </h1>
        <span className="h-[1px] block my-2 dark:bg-[#2F3340] bg-[#E4E7EC]"></span>
        <ul>
          {countries?.map((e) => (
            <li
              key={e.name}
              // className="flex items-center justify-start gap-x-2"
            >
              {e.open}
              <div
                onClick={() => setOpenCountry(e.name)}
                className="cursor-pointer"
              >
                {e.name}
              </div>
              <ul
                className={`${
                  openCountry === e.name ? 'block' : 'hidden'
                } ml-4`}
              >
                {e.leagues.map((e) => (
                  <li className="flex items-center gap-x-1" key={e.name}>
                    {e.name}{' '}
                    <img src={e.fav ? starBlue : emptyStar} alt="fav" />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Leagues
