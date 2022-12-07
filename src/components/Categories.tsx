import { Product } from '../types'

interface Props {
  products: Product[]
  selectedCategory: Product['category'] | null
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>
}

const Categories = ({
  products,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const handleClick = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <ul className='flex gap-4 [&>li>button]:uppercase flex-wrap'>
      <li>
        <button
          className={`${
            !selectedCategory ? 'bg-orange-500 text-white' : ''
          } px-2 py-1 rounded border-2 border-orange-500/50`}
          onClick={() => handleClick(null)}
        >
          All
        </button>
      </li>
      {Array.from(new Set(products.map((product) => product.category))).map(
        (category) => (
          <li className='uppercase' key={category}>
            <button
              className={`${
                selectedCategory === category ? 'bg-orange-500 text-white' : ''
              } px-2 py-1 rounded border-2 border-orange-500/50`}
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          </li>
        )
      )}
    </ul>
  )
}

export default Categories
