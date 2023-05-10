import React, { useEffect, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

const Settings = () => {
  const [settingOpened, setSettingOpened] = useState(false)
  const [settingRef, isSetting] = useClickOutside()
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(isSetting === false) {
      setSettingOpened(false)
    }
  }, [isSetting])

  useEffect(() => {
    if (window.localStorage.theme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    window.localStorage.theme = 'dark' ? 'light' : 'dark'
  }

  return (
    <div className="relative">
      <svg
        ref={settingRef}
        onClick={() => setSettingOpened(!settingOpened)}
        className="cursor-pointer"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12.375V9.625L19.5 9.125C19 8.875 18.5 8.5 18.25 8C18 7.5 18 6.875 18.25 6.25L18.875 4.875L17 3L15.625 3.625C15.125 3.875 14.5 3.875 13.875 3.625C13.375 3.375 12.875 3 12.75 2.375L12.375 1H9.625L9.125 2.5C9 3 8.5 3.5 8 3.625C7.5 3.875 6.875 3.875 6.25 3.625L4.875 3L3 4.875L3.625 6.25C3.875 6.75 3.875 7.375 3.625 8C3.5 8.5 3 9 2.5 9.125L1 9.625V12.375L2.5 12.875C3 13.125 3.5 13.5 3.75 14C4 14.5 4 15.125 3.75 15.75L3.125 17.125L5 19L6.375 18.375C6.875 18.125 7.5 18.125 8.125 18.375C8.625 18.625 9.125 19 9.25 19.625L9.625 21H12.375L12.875 19.5C13.125 19 13.5 18.5 14 18.25C14.5 18 15.125 18 15.625 18.25L17 18.875L18.875 17L18.25 15.625C18 15.125 18 14.5 18.25 13.875C18.5 13.375 18.875 12.875 19.5 12.75L21 12.375ZM11 14.125C9.25 14.125 7.875 12.75 7.875 11C7.875 9.25 9.25 7.875 11 7.875C12.75 7.875 14.125 9.25 14.125 11C14.125 12.75 12.75 14.125 11 14.125Z"
          stroke="#929EAA"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className={`${
          settingOpened ? 'scale-100' : 'scale-0'
        } bg-white dark:bg-dMBlue top-[105%] duration-150 rounded-md p-2 absolute right-0`}
      >
        <button
          className="flex gap-x-[20px] dark:text-dMWhite text-darkBlue whitespace-nowrap items-center"
          onClick={handleThemeSwitch}
        >
          {theme === 'dark' ? 'Тёмный' : 'Светлый'} режим
          <span className="w-[20px] h-[20px] rounded-[50%] bg-[#E1E3E6] dark:bg-dMBlackBlueBg"></span>
        </button>
      </div>
    </div>
  )
}

export default Settings
