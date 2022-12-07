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
    <li className='flex gap-4 items-center bg-slate-50 p-4 rounded border-2 border-slate-100 md:flex-row flex-col'>
      <img src={item.image} className='h-32 w-32 object-contain' />
      <div className='self-start flex flex-col gap-2 md:gap-4'>
        <h2 className='text-xl'>{item.title}</h2>
        <div className='flex gap-4'>
          <span>x {quantity}</span>
          <span className='font-semibold'>
            {formatCurrency(item.price * quantity)}
          </span>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className='ml-auto px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200'
      >
        Remove
      </button>
    </li>
  )
}
