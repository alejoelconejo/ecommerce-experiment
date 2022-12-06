import { useMemo } from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Spinner from '../components/Spinner'
import { useCategories } from '../hooks/useCategories'
import { Product } from '../types'

interface Props {
  isLoading: boolean
  products: Product[]
}

export const Home = ({ isLoading, products }: Props) => {
  const { selectedCategory, setSelectedCategory, getFilteredList } =
    useCategories()

  const filteredList: Product[] = useMemo(
    () => getFilteredList(products),
    [selectedCategory, products]
  )

  return (
    <>
      <h1 className='text-6xl font-bold'>
        Welcome to
        <span className='bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent pl-4'>
          El Conejo Shop!
        </span>
      </h1>
      <p>The place where you ENJOY buying random stuff</p>
      <section className='w-full'>
        <h3 className='text-xl uppercase font-bold'>Categories</h3>
        {isLoading ? (
          'Loading...'
        ) : (
          <Categories
            products={products}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </section>
      <section className='w-full'>
        <h2 className='text-2xl uppercase font-bold mb-6'>Products</h2>
        {isLoading ? <Spinner /> : <Products filteredList={filteredList} />}
      </section>
    </>
  )
}
