import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Leagues from '../components/Leagues'
import CountriesMatches from '../components/CountriesMatches'
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
      <div className='mx-auto sm:max-w-full max-w-[60%] my-12'>
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
    </div>
  )
}
