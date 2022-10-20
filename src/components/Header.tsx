import darkIcon from '../assets/images/dark-icon.svg'
import lightIcon from '../assets/images/light-icon.svg'

const Header = () => {
    const handleToggleTheme = (theme: 'dark' | 'light') => {
        console.log(theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.theme = theme
    }

    return (
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
            <div>
                <button
                    id='dark-toggle'
                    type='button'
                    onClick={() => handleToggleTheme('dark')}
                    className='text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none w-10 h-10 rounded-lg text-sm p-2.5'
                >
                    <img src={darkIcon} />
                </button>
                <button
                    id='light-toggle'
                    type='button'
                    onClick={() => handleToggleTheme('light')}
                    className='text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none w-10 h-10 rounded-lg text-sm p-2.5'
                >
                    <img src={lightIcon} className='fill-red-500' />
                </button>
            </div>
            <button>Cart</button>
        </header>
    )
}

export default Header
