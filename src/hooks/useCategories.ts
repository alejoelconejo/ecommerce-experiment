import { useState } from 'react'
import { Product } from '../types'

interface useCategories {
  (): {
    selectedCategory: Product['category']
    setSelectedCategory: React.Dispatch<
      React.SetStateAction<Product['category']>
    >
    getFilteredList: (products: Product[]) => Product[]
  }
}

export const useCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const getFilteredList = (products: Product[]) => {
    if (!selectedCategory) return products
    return products.filter((product) => product.category === selectedCategory)
  }

  return { selectedCategory, setSelectedCategory, getFilteredList }
}
