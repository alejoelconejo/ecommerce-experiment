import { setTheme } from '../utils/setTheme'
import { toggleTheme } from '../utils/toggleTheme'

import darkIcon from '../assets/images/dark-icon.svg'
import lightIcon from '../assets/images/light-icon.svg'
import { useEffect } from 'react'

export const ThemeButton = () => {
  useEffect(() => {
    setTheme()
  }, [])

  const handleToggleDark = () => {
    toggleTheme()
  }

  return (
    <div>
      <button
        id='theme-toggle'
        aria-label='Toggle Theme'
        type='button'
        onClick={handleToggleDark}
        className='text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5'
      >
        <img
          src={darkIcon}
          alt='dark-icon'
          id='theme-toggle-dark-icon'
          className='hidden w-5 h-5'
        />
        <img
          src={lightIcon}
          alt='light-icon'
          id='theme-toggle-light-icon'
          className='hidden w-5 h-5'
        />
      </button>
    </div>
  )
}
