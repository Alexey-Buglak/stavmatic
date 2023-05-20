import React, { useRef, useState } from 'react'
import italien from '../../imgs/italineIcon.svg'
import interIcon from '../../imgs/interIcon.svg'
import BlueButton from '../BlueButton'

import Top from '../../imgs/coefTop.svg'
import Up from '../../imgs/coefUp.svg'

import starBlue from '../../imgs/starBlue.svg'
import emptyStar from '../../imgs/starBlueEmpty.svg'

const CountriesMatches = () => {
  const arr = [
    {
      country: 'Италия Cefs',
      isOpen: false,
      icon: italien,
      league: 'Серия а',
      fav: false,
      matches: [
        {
          date: '2023-05-10',
          live: true,
          time: '16:00',
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
            coef: [
              {
                num: '4',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
        {
          date: '2023-05-10',
          time: '16:00',
          live: true,
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
        {
          time: '12:00',
          date: '2023-05-11',
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
      country: 'Германия 45',
      isOpen: false,
      icon: italien,
      league: 'Серия G',
      fav: false,
      matches: [
        {
          date: 'end',
          time: 'Завершен',
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
          date: '2023-05-12',
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
          date: '2023-05-11',
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
      country: 'HNT',
      isOpen: false,
      icon: italien,
      league: 'Серия G',
      fav: false,
      matches: [
        {
          date: '2023-05-10',
          time: '16:00',
          live: true,
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
        {
          date: '2023-05-12',
          time: '16:00',
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
        {
          time: '12:00',
          date: '2023-05-11',
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
      country: 'Германия 12',
      isOpen: false,
      icon: italien,
      league: 'Серия G',
      fav: false,
      matches: [
        {
          date: '2023-05-10',
          time: '16:00',
          fav: true,
          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
        {
          date: '2023-05-12',
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
          date: '2023-05-11',
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
      country: 'Германия',
      isOpen: false,
      icon: italien,
      league: 'Серия G',
      fav: false,
      matches: [
        {
          date: 'live',
          fav: true,

          teamOne: {
            name: 'Интер',
            goals: 0,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'Динамо',
            goals: 7,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
        {
          date: '2023-05-12',
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
          date: '2023-05-11',
          fav: true,
          teamOne: {
            name: 'Hamburg Towers',
            goals: 51,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
          teamTwo: {
            name: 'HNT',
            goals: 52,
            icon: interIcon,
            coef: [
              {
                num: '3.95',
                type: 'top',
              },
              {
                num: '2.95',
                type: 'up',
              },
              {
                num: '1.95',
                type: 'up',
              },
            ],
          },
        },
      ],
    },
    {
      country: 'Германия',
      isOpen: false,
      icon: italien,
      league: 'Серия G',
      fav: false,
      matches: [
        {
          date: '2023-05-10',
          time: '16:00',
          fav: true,
          coef: [
            {
              num: '3.95',
              type: 'top',
            },
            {
              num: '2.95',
              type: 'up',
            },
            {
              num: '1.95',
              type: 'up',
            },
          ],
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
          date: '2023-05-12',
          time: '16:00',
          fav: true,
          coef: [
            {
              num: '3.95',
              type: 'top',
            },
            {
              num: '2.95',
              type: 'up',
            },
            {
              num: '1.95',
              type: 'up',
            },
          ],
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
          date: '2023-05-11',
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
      country: 'Германия',
      isOpen: false,
      icon: italien,
      league: 'Серия G',
      fav: false,
      matches: [
        {
          date: '2023-05-10',
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
          date: '2023-05-12',
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
          date: '2023-05-11',
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
  ] // тут сделать загрузку

  const top = [
    {
      name: 'Индивидуальный топ',
      teams: [
        { icon: interIcon, rate: '5', name: 'HNT' },

        { icon: interIcon, rate: '5', name: 'Интер' },

        { icon: interIcon, rate: '5', name: 'Hamburg Towers' },

        { icon: interIcon, rate: '5', name: 'gogi' },

        { icon: interIcon, rate: '5', name: 'Dinamo' },

        { icon: interIcon, rate: '5', name: 'Io' },

        { icon: interIcon, rate: '5', name: 'Earth Spirit' },
      ],
    },
    {
      name: 'Угловые',
      teams: [
        { icon: interIcon, rate: '5', name: 'HNT' },
        { icon: interIcon, rate: '5', name: 'Интер' },
        { icon: interIcon, rate: '5', name: 'Hamburg Towers' },
        { icon: interIcon, rate: '5', name: 'gogi' },
        { icon: interIcon, rate: '5', name: 'Dinamo' },
        { icon: interIcon, rate: '5', name: 'Io' },
        { icon: interIcon, rate: '5', name: 'Earth Spirit' },
      ],
    },
    {
      name: 'Желтые карточки',
      teams: [
        { icon: italien, rate: '5', name: 'HNT' },
        { icon: italien, rate: '5', name: 'Интер' },
        { icon: italien, rate: '5', name: 'Hamburg Towers' },
        { icon: italien, rate: '5', name: 'gogi' },
        { icon: italien, rate: '5', name: 'Dinamo' },
        { icon: italien, rate: '5', name: 'Io' },
        { icon: italien, rate: '5', name: 'Earth Spirit' },
      ],
    },
    {
      name: 'фолы',
      teams: [
        { icon: italien, rate: '5', name: 'HNT' },
        { icon: italien, rate: '5', name: 'Интер' },
        { icon: italien, rate: '5', name: 'Hamburg Towers' },
        { icon: italien, rate: '5', name: 'gogi' },
        { icon: italien, rate: '5', name: 'Dinamo' },
        { icon: italien, rate: '5', name: 'Io' },
        { icon: italien, rate: '5', name: 'Earth Spirit' },
      ],
    },
  ]

  const [isKef, setIsKef] = useState(false)
  const dateInputRef = useRef(null)
  const handleChange = (e) => {
    filterMatches(e.target.value)
  }
  const [filteredCountries, setFilteredCountries] = useState(arr)

  const filterMatches = (date) => {
    if (date) {
      setFilteredCountries(
        arr.filter((e) => {
          e.matches = e.matches.filter((m) => m.date === date)
          return e.matches.length ? e : null
        }),
      )
    } else {
      setFilteredCountries(arr)
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between  gap-y-2 gap-x-1 items-center">
        <div className="overflow-auto flex space-x-2 ">
          <BlueButton
            text={'все'}
            small={true}
            click={() => filterMatches(null)}
          />
          <BlueButton
            text={'LIVE'}
            small={true}
            click={() => filterMatches('live')}
          />
          <BlueButton text={'Прематч'} small={true} />
          <BlueButton
            text={'зАВЕРШЕННЫЕ'}
            small={true}
            click={() => filterMatches('end')}
          />
          <BlueButton
            text={'Кэфы'}
            small={true}
            class="sm:hidden"
            click={() => setIsKef(!isKef)}
          />
        </div>
        <label className="sm:w-full relative">
          <input
            type="date"
            onChange={handleChange}
            ref={dateInputRef}
            className="rounded-[4px] sm:w-full z-50 border border-gray px-3 py-[2px] dark:bg-dMBlackBlueBg dark:text-dMWhite"
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
              strokeWidth="0.851851"
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
      </div>
      <ul className="text-darkBlue dark:text-dMWhite ">
        {filteredCountries.length ? (
          filteredCountries.map((e, idx) => (
            <li
              key={e.country + idx}
              className={`${e.matches.length ? 'block' : 'hidden'} mt-3`}
            >
              <div
                className="cursor-pointer rounded-[4px] bg-blueLight  dark:bg-dMBlue flex items-center gap-x-2 py-2 px-3"
                onClick={() => {
                  e.isOpen = !e.isOpen
                  setFilteredCountries([...filteredCountries])
                }}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <img
                    src={e.fav ? starBlue : emptyStar}
                    className="z-auto"
                    onClick={() => {
                      e.fav = !e.fav
                      setFilteredCountries([...filteredCountries])
                    }}
                    alt="fav"
                  />
                </div>
                <img src={e.icon} alt="flag" />
                <p className="font-bold text-sm uppercase">
                  {e.country}: {e.league}
                </p>
                {isKef ? (
                  <div className="text-sm font-bold ml-auto  space-x-14 mr-[10px]">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                ) : null}
                <svg
                  className={`${e.isOpen ? 'rotate-0' : 'rotate-180'} ${
                    isKef ? '' : 'ml-auto'
                  } duration-200`}
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
                        setFilteredCountries([...filteredCountries])
                      }}
                      alt="fav"
                    />
                    <p className="ml-5 mr-10 sm:ml-1 sm:mr-4">{m.time}</p>
                    <ul
                      className={`w-full ${
                        isKef || m.date === 'live' ? 'mr-[2%]' : 'mr-[7.5%]'
                      } ${
                        isKef ? 'border-0 ' : 'border-r pr-5'
                      }  dark:border-[#2F3340] border-[#E4E7EC]`}
                    >
                      <li className="flex items-center">
                        <img src={m.teamOne.icon} alt="icon" />
                        <p className="ml-2 md:ml-1">{m.teamOne.name}</p>
                        {isKef && m.teamOne.coef ? (
                          <div className="sm:hidden flex ml-auto gap-x-4">
                            {m.teamOne.coef.map((c, idx) => (
                              <p
                                key={idx}
                                className="flex gap-x-1 items-center"
                              >
                                <img
                                  src={c.type === 'top' ? Top : Up}
                                  alt={c.type}
                                />{' '}
                                {c.num}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="ml-auto">{m.teamOne.goals}</p>
                        )}
                      </li>
                      <li className="flex items-center mt-2">
                        <img src={m.teamTwo.icon} alt="icon" />
                        <p className="ml-2 md:ml-1">{m.teamTwo.name}</p>
                        <p className="ml-auto">{m.teamTwo.goals}</p>
                      </li>
                    </ul>
                    {m.date === 'live' ? (
                      <div className="mr-[2%]">LIVE</div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p className="text-3xl uppercase mt-3 text-center text-bold text-darkBlue dark:text-dMWhite">
            Ничего не найдено
          </p>
        )}
      </ul>
      <div className="mx-auto sm:max-w-full max-w-[90%] my-12">
        <h1 className="text-darkBlue dark:text-dMWhite max-w-[300px] sm:text-base font-bold text-2xl">
          Букмекерская компания Stavmatic
        </h1>
        <p className="mt-4 dark:text-dMGray sm:mt-2 text-gray text-xs">
          Проект Betonmobile нацелен только на качественное и долгосрочное
          сотрудничество с пользователями. Никто не может дать прогноз с
          гарантией, но если грамотно следовать рекомендациям специалиста, то по
          итогу месяца с высокой вероятностью беттор окажется в плюсе. Кроме
          того, на сайте трудится целая команда, считающая своей
          профессиональной обязанностью, делать качественные обзоры матчей...
          Развернуть
        </p>
      </div>
      <div>
        <h1 className="text-darkBlue dark:text-dMWhite sm:text-base font-bold text-2xl">
          Статистика ТОП-команд
        </h1>
        <div className="flex flex-wrap mt-4 gap-6">
          {top.map((t) => (
            <ul key={t.name} className="md:w-full w-[45%]">
              <li className="text-black dark:text-dMWhite  dark:bg-dMBlue uppercase font-semibold text-sm py-2 px-20 bg-blueLight rounded-[4px] text-center">
                {t.name}
              </li>
              {t.teams.map((team) => (
                <li
                  key={team.name}
                  className="text-sm px-3 mt-2 dark:text-dMWhite text-darkBlue flex items-center  gap-x-2"
                >
                  <img src={team.icon} alt="icon" />
                  <p>{team.name}</p>
                  <p className="ml-auto">{team.rate}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountriesMatches
