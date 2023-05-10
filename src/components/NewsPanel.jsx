import React from 'react'
import { NavLink } from 'react-router-dom'

import ixBet from '../imgs/IXbET.svg'
import bonus from '../imgs/bonus.png'
const NewsPanel = () => {
  const ratC = [
    {
      icon: ixBet,
      name: '1x Bet',
    },
    {
      icon: ixBet,
      name: 'Parimatch',
    },
    {
      icon: ixBet,
      name: 'Parimatch2',
    },
  ]
  const bonuses = [
    { href: '/', img: bonus },
    { href: '/', img: bonus },
  ]
  return (
    <div className="md:hidden min-w-[300px] ml-auto">
      <div>
        <h1 className="font-bold text-sm mb-3 tracking-wider dark:text-dMWhite  text-darkBlue uppercase">
          Рейтинг букмекерских контор
        </h1>
        <ul className="w-full rounded-[4px] border dark:border-[#2F3340] border-[#E4E7EC] p-3">
          {ratC.map((e, idx) => (
            <li className="flex items-center py-1" key={e.name + idx}>
              <img src={e.icon} className="" />
              <p className="text-gray dark:text-dMGray ml-2">{e.name}</p>
              <button className="ml-auto dark:bg-[#455AA8] p-4 rounded-[4px] bg-blueLight">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    className="dark:stroke-dMWhite stroke-blue"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </li>
          ))}
          <button className="rounded-md  py-[10px] mt-4 px-6 w-full text-blue uppercase border dark:border-[#5F657B] border-blueLight font-bold text-sm sm:text-sx md:px-3 md:py-[5px]">
            <NavLink to="/rate">Весь рейтинг</NavLink>
          </button>
        </ul>
      </div>
      <div>
        <h1 className="mt-5 dark:text-dMWhite font-bold text-sm mb-3 tracking-wider text-darkBlue uppercase">
          Бонусы
        </h1>
        <ul>
          {bonuses.map((b, idx) => (
            <li key={idx}>
              <a href={b.href}>
                <img src={b.img} className="mb-3" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default NewsPanel
