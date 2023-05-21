import React from 'react';
import { NavLink } from 'react-router-dom'


const SportsLine = () => {
  return (
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
  )
};

export default SportsLine;