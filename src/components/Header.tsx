import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Modal from 'react-modal'

import { setTheme } from '../utils/setTheme'
import { toggleTheme } from '../utils/toggleTheme'
import { Product } from '../types'
import { Cart } from './Cart'
import { useShoppingCart } from '../contexts/CartContext'

import darkIcon from '../assets/images/dark-icon.svg'
import lightIcon from '../assets/images/light-icon.svg'
import cartIcon from '../assets/images/cart.svg'

interface Props {
  products: Product[]
}

const Header = ({ products }: Props) => {
  const [isModalOpen, toggleModalOpen] = useState(false)

  const { cartQuantity } = useShoppingCart()

  useEffect(() => {
    setTheme()
  }, [])

  const handleClickDark = () => {
    toggleTheme()
  }

  const handleClickCart = () => {
    toggleModalOpen(true)
  }

  return (
    <header className='flex justify-between p-4 items-center max-w-7xl mx-auto'>
      <Link href='/'>
        <h1 className='text-3xl self-start bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent font-bold cursor-pointer'>
          El Conejo Shop
        </h1>
      </Link>
      <div className='flex gap-8 items-center'>
        <div>
          <button
            id='theme-toggle'
            aria-label='Toggle Theme'
            type='button'
            onClick={handleClickDark}
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
        <button
          onClick={handleClickCart}
          className='bg-purple-600 hover:bg-purple-500 transition-colors duration-75 rounded-full p-3 relative'
        >
          <img src={cartIcon} className='h-6 w-6' />
          <span className='absolute bg-gray-100 dark:bg-gray-800 rounded-full border-purple-600 border-2 bottom-[-11px] right-[-11px] px-2'>
            {cartQuantity}
          </span>
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => toggleModalOpen(false)}
        ariaHideApp={false}
      >
        <Cart products={products} />
      </Modal>
    </header>
  )
}

export default Header
