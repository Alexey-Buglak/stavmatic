import { useRef, useState, useEffect } from 'react'

// *** Usage *** //
// function App() {
//  const [hoverRef, isHovered] = useHover()
//  return <div ref={hoverRef}>{isHovered ? '😁' : '☹️'}</div>
// }

// *** Hook *** //

export default function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(() => {
    if (!ref.current) return

    const node = ref.current
    node.addEventListener('mouseover', handleMouseOver)
    node.addEventListener('mouseout', handleMouseOut)
    node.addEventListener('click', value === true ? handleMouseOut : handleMouseOver)

    return () => {
      node.removeEventListener('mouseover', handleMouseOver)
      node.removeEventListener('mouseout', handleMouseOut)
      node.removeEventListener('click', handleMouseOut)
    }
  }, [value])

  return [ref, value]
}
