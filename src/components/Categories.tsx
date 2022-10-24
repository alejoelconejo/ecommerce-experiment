interface Params {
  categories: Set<string>
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({ categories, setSelectedCategory }: Params) => {
  // const handleClick = (
  //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //     const target = e.target as HTMLInputElement
  //     setSelectedCategory(target.value)
  // }

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
