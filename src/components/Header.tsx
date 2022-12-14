import { useState } from 'react'
import { Link } from 'wouter'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import { Product } from '../types'
import { Cart } from './Cart'
import { useShoppingCart } from '../contexts/CartContext'
import { ThemeButton } from './ThemeButton'

import cartIcon from '../assets/images/cart.svg'
import logo from '../assets/images/logo.svg'

interface Props {
  products: Product[]
}

const Header = ({ products }: Props) => {
  const [isOpen, toggleOpen] = useState(false)

  const { cartQuantity } = useShoppingCart()

  const handleToggleDrawer = () => {
    toggleOpen((prevState) => !prevState)
  }

  return (
    <header className='flex justify-between py-4 items-center max-w-7xl mx-auto mb-4'>
      <Link href='/' className='flex gap-4 items-center'>
        <img src={logo} alt='logo' className='w-12 h-12' />
        <h1 className='text-3xl bg-gradient-to-r from-[#E67D4B] to-[#E6C14B] bg-clip-text text-transparent font-bold cursor-pointer md:block hidden'>
          El Conejo Shop
        </h1>
      </Link>
      <Drawer
        open={isOpen}
        onClose={handleToggleDrawer}
        direction='right'
        className='text-black px-8 py-4 overflow-y-scroll'
        size={'90vw'}
      >
        <Cart products={products} toggleDrawer={handleToggleDrawer} />
      </Drawer>
      <div className='flex gap-8 items-center'>
        <ThemeButton />
        <button
          onClick={handleToggleDrawer}
          className='bg-purple-600 hover:bg-purple-500 transition-colors duration-75 rounded-full p-3 relative'
        >
          <img src={cartIcon} alt='cart' className='h-6 w-6' />
          <span className='absolute bg-gray-100 dark:bg-gray-800 rounded-full border-purple-600 border-2 bottom-[-11px] right-[-11px] px-2'>
            {cartQuantity}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
