import { useRef, useState, useEffect } from 'react'

export default function useClickOutside() {
  const [clicked, setClicked] = useState(true)
  const ref = useRef(null)

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setClicked(!clicked)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return[ref, clicked]
}
