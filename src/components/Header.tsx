import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='fixed py-5 px-16 flex justify-between items-center w-full'>
      <Link to='/'>
        <img src='/public/logo.png' alt='logo' width={80} height={80} />
      </Link>
      <div className='text-white font-medium'>
        <Link to='/' className='px-5'>
          Home
        </Link>
        <Link to='/' className='px-5'>
          About
        </Link>
        <Link to='/' className='px-5'>
          Service
        </Link>
        <Link to='/' className='px-5'>
          Contact
        </Link>
        <button
          className='px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black'
          onClick={() => navigate('/')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Header
