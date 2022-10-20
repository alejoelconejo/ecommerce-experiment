const Header = () => (
    <header className='flex justify-between p-4 items-center max-w-7xl mx-auto'>
        <a href='/'>
            <img src='' />
            <h1 className='text-3xl self-start bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent font-bold'>
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
