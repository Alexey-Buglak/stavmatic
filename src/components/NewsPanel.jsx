import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import ixBet from '../imgs/IXbET.svg'
import bonus from '../imgs/bonus.png'
const NewsPanel = () => {
  const newsTypes = [
    {
      name: 'Все',
      type: null,
    },
    {
      name: 'букмекеров',
      type: 'buk',
    },
    {
      name: 'спорта',
      type: 'sport',
    },
  ]
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
  const news = [
    {
      text: 'АПЛ, Ла Лига и чемпионат Австралии. Гайд о том, на что поставить в праздники',
      date: '06 Ноября 15:59',
      type: 'buk',
    },
    {
      text: 'Финляндия — Россия, Канада — США. Кто возьмет медали МЧМ по хоккею?',
      date: '07 Ноября 15:59',
      type: 'sport',
    },
    {
      text: 'Игрок "Атлетико" забанен за ставки на 10 недель. Его обвинили в пари на свой же трансфер',
      date: '09 Ноября 15:59',
      type: 'sport',
    },
  ]

  const [filteredNews, setFilteredNews] = useState([])
  const [typeNews, setTypeNews] = useState(null)

  useEffect(() => {
    if (typeNews) {
      setFilteredNews(news.filter((n) => n.type === typeNews))
    } else {
      setFilteredNews(news)
    }
  }, [typeNews])

  return (
    <div className="md:hidden max-w-[300px] ml-auto">
      <div>
        <h1 className="font-bold text-sm mb-3 tracking-wider dark:text-dMWhite  text-darkBlue uppercase">
          Рейтинг букмекерских контор
        </h1>
        <ul className="w-full rounded-[4px] border dark:border-[#2F3340] border-[#E4E7EC] p-3">
          {ratC.map((e, idx) => (
            <li className="flex items-center py-1" key={e.name + idx}>
              <img src={e.icon} alt='img' />
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
                <img src={b.img} className="mb-3" alt='img' />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="mt-5 dark:text-dMLightBlue dark:text-dMWhite font-bold text-sm mb-3 tracking-wider text-darkBlue uppercase">
          Новости
        </h1>
        <div className="mb-2 ">
          {newsTypes.map((n) => (
            <button
              key={n.type}
              className={`${
                n.type === typeNews
                  ? 'dark:bg-[#455AA8] text-blue dark:text-dMWhite bg-blueLight'
                  : 'dark:text-dMWhite text-darkBlue'
              } rounded-[4px]  py-2 px-3  uppercase text-sm font-semibold`}
              onClick={() => setTypeNews(n.type)}
            >
              {n.name}
            </button>
          ))}
        </div>
        <ul className="drop-shadow w-full rounded-[4px] border dark:border-[#2F3340] border-[#E4E7EC] ">
          {filteredNews.map((n, idx) => (
            <li
              key={n.text}
              className={`py-[10px] ${
                idx + 1 === filteredNews.length ? 'border-0' : 'border-b'
              }  px-[18px]  dark:border-[#2F3340] border-[#E4E7EC]`}
            >
              <p className="text-darkBlue dark:text-dMWhite text-sm ">
                {n.text}
              </p>
              <p className="text-gray dark:text-dMGray text-xs">{n.date}</p>
            </li>
          ))}
          <div className="text-center">
            <button className="rounded-md w-[90%] mb-[18px]  py-[10px]  mt-4 px-6  text-blue uppercase border dark:border-[#5F657B] border-blueLight font-bold text-sm sm:text-sx md:px-3 md:py-[5px]">
              <NavLink to="/news">Все новости</NavLink>
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NewsPanel
