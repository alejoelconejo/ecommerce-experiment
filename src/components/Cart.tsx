import { useShoppingCart } from '../contexts/CartContext'
import { Product } from '../types'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'

interface Props {
  products: Product[]
  toggleDrawer: () => void
}

export const Cart = ({ products, toggleDrawer }: Props) => {
  const { cartItems, removeAllCart } = useShoppingCart()

  if (!cartItems.length) return <p>The cart is empty</p>

  return (
    <section>
      <button onClick={toggleDrawer}>Cerrar</button>
      <ul className='flex flex-col gap-8 m-4'>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} products={products} />
        ))}
        <span>Total</span>
        <span>
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = products.find((i) => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )}
        </span>
      </ul>
      <button className='ml-auto block' onClick={() => removeAllCart()}>
        Empty Cart
      </button>
    </section>
  )
}
