import React, { useEffect, useRef, useState } from 'react'
import italien from '../imgs/italineIcon.svg'
import interIcon from '../imgs/interIcon.svg'

import starBlue from '../imgs/starBlue.svg'
import emptyStar from '../imgs/starBlueEmpty.svg'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

const CountriesMatches = () => {
  const [arr, setArr] = useState([
    {
      country: 'Италия',
      date: '2023-05-10',
      isOpen: false,
      icon: italien,
      league: 'Серия а',
      fav: false,
      matches: [
        {
          time: '16:00',
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
          },
        },
        {
          time: '12:00',
          fav: true,
          teamOne: {
            name: 'Hamburg Towers',
            goals: 51,
            icon: interIcon,
          },
          teamTwo: {
            name: 'HNT',
            goals: 52,
            icon: interIcon,
          },
        },
      ],
    },
    {
      country: 'Италия',
      date: '2023-05-10',
      isOpen: false,
      icon: italien,
      league: 'Серия а',
      fav: false,
      matches: [
        {
          time: '16:00',
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
          },
        },
        {
          time: '12:00',
          fav: true,
          teamOne: {
            name: 'Hamburg Towers',
            goals: 51,
            icon: interIcon,
          },
          teamTwo: {
            name: 'HNT',
            goals: 52,
            icon: interIcon,
          },
        },
      ],
    },
    {
      country: 'Италия',
      isOpen: false,
      date: '2023-05-11',
      icon: italien,
      league: 'Серия а',
      fav: false,
      matches: [
        {
          time: '16:00',
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
          },
        },
      ],
    },
    {
      country: 'Германия',
      isOpen: false,
      date: '2023-05-12',
      icon: italien,
      league: 'Серия В',
      fav: true,
      matches: [
        {
          time: '16:00',
          fav: false,
          teamOne: {
            name: 'HNT',
            goals: 10,
            icon: interIcon,
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
          },
        },
      ],
    },
  ]) // тут сделать загрузку

  const [date, setDate] = useState('')
  const dateInputRef = useRef(null)
  const handleChange = (e) => {
    setDate(e.target.value)
  }
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    if (date) {
      setFilteredCountries(arr.filter((e) => e.date === date))
    } else {
      setFilteredCountries(arr)
    }
  }, [arr, date])

  return (
    <div className="w-full">
      <label className="relative">
        <input
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
          className="rounded-[4px] z-50 border border-gray px-2 dark:bg-dMBlackBlueBg dark:text-dMWhite"
        />
        <svg
          className="absolute right-2 top-1/2 translate-y-[-50%]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1667 1.6665V5.83317"
            stroke="#929EAA"
            strokeWidth="1.5"
          />
          <path
            d="M6.29639 1.6665V5.83317"
            stroke="#929EAA"
            strokeWidth="1.5"
          />
          <rect
            x="2.41675"
            y="4.26855"
            width="15.1667"
            height="13.3148"
            rx="1.25"
            stroke="#929EAA"
            strokeWidth="1.5"
          />
          <circle
            cx="10.0001"
            cy="8.14809"
            r="0.5"
            stroke="#929EAA"
            strokeWidth="0.851851"
          />
          <circle
            cx="13.7038"
            cy="8.14809"
            r="0.5"
            stroke="#929EAA"
            stroke-width="0.851851"
          />
          <circle
            cx="10.0001"
            cy="11.3888"
            r="0.5"
            stroke="#929EAA"
            strokeWidth="0.851851"
          />
          <mask id="path-7-inside-1_2739_39167" fill="white">
            <ellipse cx="6.29629" cy="11.3888" rx="0.925926" ry="0.925926" />
          </mask>
          <path
            d="M6.22221 11.3888C6.22221 11.3479 6.25538 11.3147 6.29629 11.3147V13.3147C7.35995 13.3147 8.22221 12.4525 8.22221 11.3888H6.22221ZM6.29629 11.3147C6.3372 11.3147 6.37036 11.3479 6.37036 11.3888H4.37036C4.37036 12.4525 5.23263 13.3147 6.29629 13.3147V11.3147ZM6.37036 11.3888C6.37036 11.4297 6.3372 11.4629 6.29629 11.4629V9.46289C5.23263 9.46289 4.37036 10.3252 4.37036 11.3888H6.37036ZM6.29629 11.4629C6.25538 11.4629 6.22221 11.4297 6.22221 11.3888H8.22221C8.22221 10.3252 7.35995 9.46289 6.29629 9.46289V11.4629Z"
            fill="#929EAA"
            mask="url(#path-7-inside-1_2739_39167)"
          />
          <circle
            cx="13.7038"
            cy="11.3888"
            r="0.5"
            stroke="#929EAA"
            strokeWidth="0.851851"
          />
          <circle
            cx="10.0001"
            cy="14.6295"
            r="0.5"
            stroke="#929EAA"
            strokeWidth="0.851851"
          />
          <mask id="path-11-inside-2_2739_39167" fill="white">
            <ellipse cx="6.29629" cy="14.6295" rx="0.925926" ry="0.925926" />
          </mask>
          <path
            d="M6.22221 14.6295C6.22221 14.5886 6.25538 14.5555 6.29629 14.5555V16.5555C7.35995 16.5555 8.22221 15.6932 8.22221 14.6295H6.22221ZM6.29629 14.5555C6.3372 14.5555 6.37036 14.5886 6.37036 14.6295H4.37036C4.37036 15.6932 5.23263 16.5555 6.29629 16.5555V14.5555ZM6.37036 14.6295C6.37036 14.6704 6.3372 14.7036 6.29629 14.7036V12.7036C5.23263 12.7036 4.37036 13.5659 4.37036 14.6295H6.37036ZM6.29629 14.7036C6.25538 14.7036 6.22221 14.6704 6.22221 14.6295H8.22221C8.22221 13.5659 7.35995 12.7036 6.29629 12.7036V14.7036Z"
            fill="#929EAA"
            mask="url(#path-11-inside-2_2739_39167)"
          />
          <circle
            cx="13.7038"
            cy="14.6295"
            r="0.5"
            stroke="#929EAA"
            strokeWidth="0.851851"
          />
        </svg>
      </label>
      <ul className="text-darkBlue dark:text-dMWhite ">
        {filteredCountries.map((e, idx) => (
          <li key={e.country + idx} className=" mt-3">
            <div
              className="cursor-pointer rounded-[4px] bg-blueLight  dark:bg-dMBlue flex items-center gap-x-2 py-2 px-3"
              onClick={() => {
                e.isOpen = !e.isOpen
                setArr([...arr])
              }}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <img
                  src={e.fav ? starBlue : emptyStar}
                  className="z-auto"
                  onClick={() => {
                    e.fav = !e.fav
                    setArr([...arr])
                  }}
                  alt="fav"
                />
              </div>
              <img src={e.icon} alt="flag" />
              <p className="font-bold text-sm uppercase">
                {e.country}: {e.league}
              </p>
              <svg
                className={`${
                  e.isOpen ? 'rotate-180' : 'rotate-0'
                } duration-200 ml-auto`}
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L5 2L1 6"
                  className="stroke-[#627080] dark:stroke-[#E9E9F3]"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <ul className={`${e.isOpen ? 'block' : 'hidden'}`}>
              {e.matches.map((m, idx) => (
                <li
                  key={m.teamOne.name + m.teamTwo.name + idx}
                  className={`${
                    e.matches.length === idx + 1 ? 'border-0' : 'border-b'
                  } dark:border-[#2F3340] border-[#E4E7EC] flex items-center mx-2 py-2`}
                >
                  <img
                    src={m.fav ? starBlue : emptyStar}
                    className=" cursor-pointer z-50"
                    onClick={() => {
                      m.fav = !m.fav
                      setArr([...arr])
                    }}
                    alt="fav"
                  />
                  <p className="ml-5 mr-10">{m.time}</p>
                  <ul className="w-full mr-[5%] pr-5 border-r dark:border-[#2F3340] border-[#E4E7EC]">
                    <li className="flex items-center">
                      <img src={m.teamOne.icon} />
                      <p className="ml-2 md:ml-1">{m.teamOne.name}</p>
                      <p className="ml-auto">{m.teamOne.goals}</p>
                    </li>
                    <li className="flex items-center mt-2">
                      <img src={m.teamTwo.icon} />
                      <p className="ml-2 md:ml-1">{m.teamTwo.name}</p>
                      <p className="ml-auto">{m.teamTwo.goals}</p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default CountriesMatches
