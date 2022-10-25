import { Product } from '../types'

interface Props {
  categories: Set<Product['category']>
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({ categories, setSelectedCategory }: Props) => {
  const handleClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <ul className='flex gap-4 [&>li>button]:uppercase'>
      <li>
        <button onClick={() => handleClick('')}>All</button>
      </li>
      {[...categories].map((category) => (
        <li key={category}>
          <button value={category} onClick={() => handleClick(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Categories
