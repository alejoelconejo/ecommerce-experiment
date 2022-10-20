interface Params {
    categories: Set<string>
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({ categories, setSelectedCategory }: Params) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const target = e.target as HTMLInputElement
        setSelectedCategory(target.value)
    }

    return (
        <ul>
            <li>
                <button onClick={handleClick}>Todos</button>
            </li>
            {[...categories].map((category) => (
                <li key={category}>
                    <button value={category} onClick={handleClick}>
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Categories
