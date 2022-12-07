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
      <h1 className='text-6xl font-bold text-center'>
        Welcome to
        <span className='bg-gradient-to-r from-[#E67D4B] to-[#E6C14B] bg-clip-text text-transparent pl-4'>
          El Conejo Shop!
        </span>
      </h1>
      <p className='italic text-lg'>The place where you ENJOY buying stuff</p>
      <section className='w-full mt-8'>
        <h3 className='text-xl uppercase font-bold mb-2'>Categories</h3>
        {isLoading ? (
          <Spinner />
        ) : (
          <Categories
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </section>
      <section className='w-full'>
        <h2 className='text-2xl uppercase font-bold mb-6'>Products</h2>
        <div className='w-full'>
          {isLoading ? <Spinner /> : <Products filteredList={filteredList} />}
        </div>
      </section>
    </>
  )
}
