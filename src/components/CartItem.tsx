import { useShoppingCart } from '../contexts/CartContext'
import { Product } from '../types'
import { formatCurrency } from '../utils/formatCurrency'

type Props = {
  id: number
  quantity: number
  products: Product[]
}

export const CartItem = ({ id, quantity, products }: Props) => {
  const { removeFromCart } = useShoppingCart()
  const item = products.find((i) => i.id === id)
  if (item == null) return null

  return (
    <li className='flex gap-8 items-center'>
      <img src={item.image} className='h-32 w-32 object-contain' />
      <div>
        <h2>{item.title}</h2>
        <div className='flex gap-8'>
          <span>X {quantity}</span>
          <span>{formatCurrency(item.price * quantity)}</span>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className='ml-auto px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200 '
      >
        Remove
      </button>
    </li>
  )
}
