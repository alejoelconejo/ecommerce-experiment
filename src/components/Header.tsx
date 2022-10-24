import { useEffect } from 'react'
import { setTheme } from '../actions/setTheme'
import { toggleTheme } from '../actions/toggleTheme'
import darkIcon from '../assets/images/dark-icon.svg'
import lightIcon from '../assets/images/light-icon.svg'

const Header = () => {
  useEffect(() => {
    setTheme()
  }, [])

  const handleClickDark = () => {
    toggleTheme()
  }

  return (
    <header className='flex justify-between p-4 items-center max-w-7xl mx-auto'>
      <a href='/'>
        <img src='' />
        <h1 className='text-3xl self-start bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent font-bold'>
          Arturo Shop
        </h1>
      </a>
      <nav>
        <ul className='flex gap-8'>
          <li>Men</li>
          <li>Women</li>
          <li>Winter</li>
          <li>Spring</li>
          <li>Electronic</li>
          <li>Food</li>
        </ul>
      </nav>
      <div>
        <button
          id='theme-toggle'
          type='button'
          onClick={handleClickDark}
          className='text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5'
        >
          <img
            src={darkIcon}
            id='theme-toggle-dark-icon'
            className='hidden w-5 h-5'
          />
          <img
            src={lightIcon}
            id='theme-toggle-light-icon'
            className='hidden w-5 h-5'
          />
        </button>
      </div>
      <button>Cart</button>
    </header>
  )
}

export default Header
