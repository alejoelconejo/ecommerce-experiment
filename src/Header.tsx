const Header = () => (
    <header className='flex justify-around p-4 items-center'>
        <a href='/'>
            <img src='' />
            <h1 className='text-3xl self-start text-pink-300 font-bold'>
                Arturo Shop
            </h1>
        </a>
        <nav>
            <ul className='flex gap-8'>
                <li>Men</li>
                <li>Women</li>
                <li>Winter</li>
                <li>Spring</li>
                <li>Electronic</li>
                <li>Food</li>
            </ul>
        </nav>
        <button>Cart</button>
    </header>
)

export default Header
