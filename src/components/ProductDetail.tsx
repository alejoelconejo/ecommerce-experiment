import { getRanking } from '../utils/getRanking'
import { Product } from '../types'
import { useShoppingCart } from '../contexts/CartContext'

interface Props {
  productDetail: Product
}

export const ProductDetail = ({ productDetail }: Props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(productDetail.id)

  return (
    <article className='flex gap-8 mb-12'>
      <figure className='p-8 bg-white rounded-md border-gray-100 border-2 flex justify-center items-center flex-1'>
        <img
          className='w-auto h-64 object-contain'
          src={productDetail.image}
          alt={productDetail.title}
        />
      </figure>
      <div className='flex-1 flex-col justify-between flex'>
        <div>
          <h2 className='font-bold text-3xl mb-2'>{productDetail.title}</h2>
          <p className='mb-8'>{productDetail.description}</p>
          <span className='font-bold text-xl'>
            {productDetail.price.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </span>
          <div className='flex gap-1 mb-4'>
            <p>{getRanking(productDetail.rating.rate)}</p>
            <span>({productDetail.rating.count})</span>
          </div>
        </div>

        <div className=''>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(productDetail.id)}
              className='bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-full text-gray-100 font-bold'
            >
              Add to Cart
            </button>
          ) : (
            <div className='flex gap-4'>
              <div className='flex gap-4 items-center'>
                <button
                  className='text-3xl'
                  onClick={() => decreaseCartQuantity(productDetail.id)}
                >
                  -
                </button>
                <span className='text-xl'>{quantity}</span>
                <button
                  className='text-3xl'
                  onClick={() => increaseCartQuantity(productDetail.id)}
                >
                  +
                </button>
              </div>
              <button
                className='px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
                onClick={() => removeFromCart(productDetail.id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
