import { useState } from 'react'
import { useShoppingCart } from '../contexts/CartContext'
import { Product } from '../types'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'
import Spinner from './Spinner'

interface Props {
  products: Product[]
  toggleDrawer: () => void
}

export const Cart = ({ products, toggleDrawer }: Props) => {
  const { cartItems, removeAllCart } = useShoppingCart()

  const [isBuying, setIsBuying] = useState(false)

  function buyCart() {
    setIsBuying(true)
    setTimeout(() => {
      removeAllCart()
      setIsBuying(false)
    }, 3000)
  }

  if (!cartItems.length) return <p>The cart is empty</p>

  return (
    <section>
      <button
        onClick={toggleDrawer}
        className='px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
      >
        Close
      </button>
      <ul className='flex flex-col gap-8 md:m-4 mt-8'>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} products={products} />
        ))}
        <div className='flex gap-2 font-semibold justify-end mb-4'>
          <span className=''>Total</span>
          <span>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </span>
        </div>
      </ul>
      <div className='flex justify-end gap-8'>
        <button
          className={`block px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-400 text-white w-32 h-12 ${
            isBuying ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={() => buyCart()}
        >
          {isBuying ? <Spinner /> : 'Buy Products'}
        </button>
        <button
          className='block px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200'
          onClick={() => removeAllCart()}
        >
          Empty Cart
        </button>
      </div>
    </section>
  )
}
