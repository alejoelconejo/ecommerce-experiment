import { Link } from 'wouter'
import { getRanking } from '../utils/getRanking'

import { Product } from '../types'

interface Props {
  filteredList: Product[]
}

const Products = ({ filteredList }: Props) => {
  return (
    <ul className='grid grid-cols-cards gap-4 text-slate-800'>
      {filteredList.map(({ title, id, image, price, rating }) => (
        <li
          key={id}
          className='bg-white p-4 flex flex-col gap-4 rounded-md border-gray-100 border-2'
        >
          <Link href={`/product/${id}`} className='hover:opacity-80'>
            <img
              src={image}
              className='h-64 w-64 mx-auto object-contain'
              alt={title}
            />
            <footer className='flex flex-col'>
              <p>
                {price.toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'ARS',
                })}
              </p>
              <h3>{title}</h3>
              <p className='text-yellow-500'>{getRanking(rating.rate)}</p>
            </footer>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Products
