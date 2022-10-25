import { SetStateAction, useEffect, useState } from 'react'
import { Link } from 'wouter'
import Modal from 'react-modal'
import { setTheme } from '../actions/setTheme'
import { toggleTheme } from '../actions/toggleTheme'
import darkIcon from '../assets/images/dark-icon.svg'
import lightIcon from '../assets/images/light-icon.svg'
import { Product } from '../types'

interface Params {
  cart: Product[]
  setCart: React.Dispatch<SetStateAction<Product[]>>
}

const Header = ({ cart, setCart }: Params) => {
  const [isModalOpen, toggleModalOpen] = useState(false)

  useEffect(() => {
    setTheme()
  }, [])

  const handleClickDark = () => {
    toggleTheme()
  }

  const handleClickCart = () => {
    toggleModalOpen(true)
  }

  const handleClickEmpty = () => {
    setCart([])
  }

  return (
    <header className='flex justify-between p-4 items-center max-w-7xl mx-auto'>
      <Link href='/'>
        <img src='' />
        <h1 className='text-3xl self-start bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent font-bold'>
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
      <button onClick={handleClickCart}>Cart</button>
      <span>{cart.length}</span>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => toggleModalOpen(false)}
        ariaHideApp={false}
      >
        {!cart.length ? (
          <p>The cart is empty</p>
        ) : (
          <section>
            <ul className='flex flex-col gap-8 m-4'>
              {cart.map((product) => (
                <li className='flex gap-4 items-center'>
                  <img src={product.image} className='w-16 h-16' />
                  <h3>{product.title}</h3>
                  <span>
                    {product.price.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                    })}
                  </span>
                </li>
              ))}
              <span>Total</span>
              <span>
                {cart.reduce((acc, product) => {
                  return acc + product.price
                }, 0)}
              </span>
            </ul>
            <button onClick={handleClickEmpty}>Empty Cart</button>
          </section>
        )}
      </Modal>
    </header>
  )
}

export default Header
