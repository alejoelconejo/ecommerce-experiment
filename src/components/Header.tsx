import { SetStateAction, useEffect, useState } from 'react'
import { Link } from 'wouter'
import Modal from 'react-modal'
import { setTheme } from '../utils/setTheme'
import { toggleTheme } from '../utils/toggleTheme'
import darkIcon from '../assets/images/dark-icon.svg'
import lightIcon from '../assets/images/light-icon.svg'
import { Product } from '../types'
import { Cart } from './Cart'
import { useShoppingCart } from '../contexts/CartContext'

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
      <nav>
        <ul className='flex gap-8'>
          <li>Men</li>
          <li>Women</li>
          <li>Electronics</li>
          <li>Jewelry</li>
        </ul>
      </nav>
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
      <button onClick={handleClickCart}>Cart</button>
      <span>{cartQuantity}</span>
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
