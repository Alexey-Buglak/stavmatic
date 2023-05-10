import React from 'react'
import { NavLink } from 'react-router-dom'

const BlueButton = (props) => {
  return (
    <button className="rounded-md bg-blue py-[10px] px-6 text-white uppercase font-bold text-sm sm:text-sx md:px-3 md:py-[5px]">
      <NavLink to={props.path}>{props.text}</NavLink>
    </button>
  )
}

export default BlueButton
