import { Product } from '../types'

interface Props {
  products: Product[]
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>
}

const Categories = ({ products, setSelectedCategory }: Props) => {
  const handleClick = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <ul className='flex gap-4 [&>li>button]:uppercase'>
      <li>
        <button onClick={() => handleClick(null)}>All</button>
      </li>
      {Array.from(new Set(products.map((product) => product.category))).map(
        (category) => (
          <button value={category} onClick={() => handleClick(category)}>
            <li className='uppercase' key={category}>
              {category}
            </li>
          </button>
        )
      )}
    </ul>
  )
}

export default Categories
