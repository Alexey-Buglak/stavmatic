import React from 'react'
import { NavLink } from 'react-router-dom'

const BlueButton = (props) => {
  return (
    <button onClick={props.click} className={`rounded-md bg-blue ${props.small ? 'p-2' : 'py-[10px] px-6'} text-white uppercase font-bold text-sm sm:text-sx md:px-3 md:py-[5px]`}>
      {props.path ? (
        <NavLink to={props.path}>{props.text}</NavLink>
      ) : (
        props.text
      )}
    </button>
  )
}

export default BlueButton
