import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useHover from '../../hooks/useHover'

import logo from '../../imgs/logoWhite.svg'
import facebookLogo from '../../imgs/facebookLogo.svg'
import vkLogo from '../../imgs/vkLogo.svg'
import telegramLogo from '../../imgs/telegramLOgo.svg'
import Settings from './Settings'
import basketballLogo from '../../imgs/basketball.svg'
import cybersportLogo from '../../imgs/cybersport.svg'
import footballLogo from '../../imgs/football.svg'
import handballLogo from '../../imgs/handball.svg'
import hokeyLogo from '../../imgs/hokey.svg'
import tennisLogo from '../../imgs/tennis.svg'
import voleyballLogo from '../../imgs/voleyball.svg'
import Search from './Search'

export default function Navbar() {
  const sportsMenu = useRef()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [hoverInfoRef, isInfoHovered] = useHover(false)
  const [sportMenu, setSportMenu] = useState(false)

  const logosItems = [
    { l: facebookLogo, alt: 'facebook' },
    { l: vkLogo, alt: 'vk' },
    { l: telegramLogo, alt: 'telegram' },
  ] // keine href Links
  const infoItems = [
    {
      name: 'новости',
      path: '/news',
    },
    {
      name: 'статьи',
      path: '/posts',
    },
  ]
  const [sportResElems, setSportResElems] = useState([])
  const [sportElems, setSportElems] = useState([])
  const sport = [
    { name: 'ФУТБОЛ', path: '/football', logo: footballLogo },
    { name: 'ХОККЕЙ', path: '/hokey', logo: hokeyLogo },
    { name: 'ВОЛЕЙБОЛ', path: '/voleyball', logo: voleyballLogo },
    { name: 'БАСКЕТБОЛ', path: '/basketball', logo: basketballLogo },
    { name: 'ТЕННИС', path: '/tennis', logo: tennisLogo },
    { name: 'ГАНДБОЛ', path: '/handball', logo: handballLogo },
    { name: 'КИБЕРСПОРТ', path: '/cybersport', logo: cybersportLogo },
  ]
  const navbarItems = [
    { name: 'Life результаты', path: '/live' },
    { name: 'Статистика', path: '/statistics' },
    { name: 'Прогнозы', path: '/prognosis' },
    { name: 'топ серий', path: '/top' },
    { name: 'букмекеры', path: '/bookmakers' },
  ]

  useEffect(() => {
    function handleResize() {
      const elemsToSwitch = Math.floor(sportsMenu.current.offsetWidth / 140)
      setSportResElems(sport.slice(elemsToSwitch, sport.length))
      setSportElems(sport.slice(0, elemsToSwitch))
    }
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleResize)
    }
  }) // чтобы на разных экранах прятались значки спорта

  return (
    <nav className="dark:text-dMWhite text-white ">
      <div className="py-3 relative bg-blue dark:bg-dMBlue">
        <div className="container">
          <p className="text-xs pb-5">
            Футбол - Результаты онлайн и счет матчей
          </p>
          <div className="font-[600] uppercase text-sm flex justify-between items-center gap-x-8">
            <img src={logo} alt="stavmatic" />
            <div className="md:hidden items-center flex gap-x-6 ">
              {navbarItems.map((e) => (
                <NavLink key={e.path} to={e.path}>
                  {e.name}
                </NavLink>
              ))}
              <div
                className="cursor-pointer flex relative items-center gap-x-2"
                ref={hoverInfoRef}
              >
                Информация
                <svg
                  className={`${
                    isInfoHovered ? 'rotate-180' : 'rotate-0'
                  } duration-150`}
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 1L5 5L1 1" stroke="white" strokeWidth="1.5" />
                </svg>
                <div
                  className={`${
                    isInfoHovered ? 'scale-100' : 'scale-0'
                  } duration-150 absolute bottom-[-65px] right-0 gap-y-2 rounded-md bg-white text-dMBlue dark:bg-dMBlackBlue dark:text-white px-3 py-2 flex flex-col`}
                >
                  {infoItems.map((e) => (
                    <NavLink key={e.path} to={e.path}>
                      {e.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden flex gap-x-3 ml-auto">
              {logosItems.map((l) => (
                <a key={l.l} href="/">
                  <img className="w-full min-w-[20px]" src={l.l} alt={l.alt} />
                </a>
              ))}
            </div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-white ring-1 ring-white dark:ring-gray-500 dark:text-gray-500 rounded-lg mdR:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                navbarOpen
                  ? 'scale-100 translate-y-0'
                  : 'scale-0 translate-y-[-100%]'
              } bg-blue mdR:hidden z-50 justify-center flex flex-col gap-y-8 duration-150 dark:bg-dMBlue py-3 w-full text-center absolute left-0 top-[100%]`}
            >
              {navbarItems.map((e) => (
                <NavLink key={e.path} to={e.path}>
                  {e.name}
                </NavLink>
              ))}
              {infoItems.map((e) => (
                <NavLink key={e.path} to={e.path}>
                  {e.name}
                </NavLink>
              ))}
              <div className="flex justify-center gap-x-3">
                {logosItems.map((l) => (
                  <a key={l.l} href="/">
                    <img src={l.l} alt={l.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkWhite py-3 dark:bg-dMBlackBlueBg">
        <div className="text-darkBlue font-bold uppercase sm:text-xs text-sm dark:text-dMWhite container flex justify-between">
          <NavLink
            to="/favorite"
            className="flex sm:gap-x-1 sm:mr-0 items-center md:mr-5 gap-x-2 uppercase mr-10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4692 7.1379L13.3209 6.19873L10.5651 0.328749C10.3593 -0.109583 9.6401 -0.109583 9.43427 0.328749L6.67927 6.19873L0.530956 7.1379C0.0259576 7.2154 -0.175709 7.82956 0.178457 8.19206L4.64511 12.7704L3.58928 19.2429C3.50512 19.757 4.05428 20.1429 4.50845 19.8904L10.0001 16.8554L15.4918 19.8912C15.9417 20.1412 16.4959 19.7629 16.4109 19.2437L15.3551 12.7712L19.8217 8.19289C20.1759 7.82956 19.9734 7.2154 19.4692 7.1379Z"
                fill="#4A66CD"
              />
            </svg>
            Избранное
          </NavLink>
          <div
            ref={sportsMenu}
            className="flex gap-x-3 md:mr-3 w-full mr-10 md:justify-center md:gap-x-5 justify-between"
          >
            {sportElems.map((e) => (
              <NavLink
                className="flex items-center gap-x-2"
                key={e.path}
                to={e.path}
              >
                <img src={e.logo} alt={e.name} />
                {e.name}
              </NavLink>
            ))}
          </div>
          <div
            className={`${sportResElems.length ? 'flex' : 'hidden'} relative `}
          >
            <button
              className="flex mr-3 items-center gap-x-2"
              onClick={() => setSportMenu(!sportMenu)}
            >
              Другие
              <svg
                className={`${
                  sportMenu ? 'rotate-180' : 'rotate-0'
                } duration-200`}
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-[#0C0A48] dark:stroke-[#E9E9F3]"
                  d="M9.5 1L5.5 5L1.5 1"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <div
              className={`${
                sportMenu ? 'scale-100' : 'scale-0'
              } duration-100 sm:right-[-140%] bg-white gap-3 flex-wrap w-[300px] h-max flex items-start dark:bg-dMBlue rounded-md px-4 py-2 right-[0%] top-[110%] absolute`}
            >
              {sportResElems.map((e) => (
                <NavLink
                  className="flex items-center w-[45%] gap-x-2"
                  key={e.path}
                  to={e.path}
                >
                  <img src={e.logo} alt={e.name} />
                  {e.name}
                </NavLink>
              ))}
            </div>
          </div>
          <Search />
          <div className="cursor-pointer flex mr-4 items-center gap-x-1">
            <span className="sm:hidden">Войти</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5.59849V2H22V22H8V18.4015"
                stroke="#929EAA"
                strokeWidth="1.5"
              />
              <path d="M1 12H15" stroke="#929EAA" strokeWidth="1.5" />
              <path d="M12 8L16 12L12 16" stroke="#929EAA" strokeWidth="1.5" />
            </svg>
          </div>
          <Settings />
        </div>
      </div>
    </nav>
  )
}
