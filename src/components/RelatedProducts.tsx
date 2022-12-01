import { Link } from 'wouter'
import { Product } from '../types'

interface Props {
  products: Product[]
  productDetail: Product
}

export const RelatedProducts = ({ products, productDetail }: Props) => {
  const getRelatedProducts = () =>
    products.filter(
      (product) =>
        productDetail.category === product.category &&
        productDetail.id !== product.id
    )

  const relatedProducts = getRelatedProducts()

  return (
    <div>
      <h3 className='text-2xl mb-4'>More Products</h3>
      <ul className='grid grid-cols-relatedProducts gap-4'>
        {relatedProducts.map(({ id, title, image }) => (
          <li key={id} className='w-full'>
            <Link href={`/product/${id}`}>
              <figure className='bg-white p-4 rounded-md border-gray-100 border-2'>
                <img
                  src={image}
                  className='h-48 w-48 object-contain'
                  alt={title}
                ></img>
              </figure>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
