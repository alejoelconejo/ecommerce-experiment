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
    <li className='flex gap-4 items-center'>
      <img src={item.image} className='h-32 w-32 object-contain' />
      <h2>{item.title}</h2>
      <span>{quantity}</span>
      <span>{formatCurrency(item.price * quantity)}</span>
      <button onClick={() => removeFromCart(item.id)} className='ml-auto'>
        Remove
      </button>
    </li>
  )
}
