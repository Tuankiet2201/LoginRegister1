import { useCallback, useState, useMemo } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoLockClosedSharp, IoMailSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialError = useMemo(() => {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState(initialError)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    },
    [formData]
  )

  const isValidEmail = (email: string) => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  const validateForm = useCallback(() => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: ''
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password and Confirm password is not matched'
    }

    setErrors(newErrors)

    return Object.values(newErrors).every((error) => error === '')
  }, [formData.confirmPassword, formData.email, formData.password])

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const isFormValid = validateForm()

      if (isFormValid) {
        // Handle form submission (e.g., send data to the server)
        navigate('/')
      }
    },
    [navigate, validateForm]
  )

  return (
    <div className='w-screen h-screen bg-login bg-center bg-cover flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='border-2 border-white rounded-lg py-3 px-10 relative backdrop-blur-sm min-w-[350px]'
      >
        <AiOutlineClose className='absolute top-0 right-0 bg-white w-8 h-8 rounded-bl-lg rounded-tr-sm p-1' />
        <p className='text-4xl font-bold text-gray-400 mb-8'>Register</p>
        <div className='relative mt-5'>
          <input
            type='text'
            id='email'
            name='email'
            className='block rounded-t-lg pb-2.5 pt-5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer pr-6'
            placeholder=' '
            onChange={handleChange}
            value={formData.email}
          />
          <label
            htmlFor='email'
            className='absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Email
          </label>
          <IoMailSharp className='absolute top-1/2 right-1 text-white -translate-y-1/2 text-base pointer-events-none' />
          {errors.email && <p className='text-xs text-red-500 mt-1'>{errors.email}</p>}
        </div>
        <div className='relative mt-5'>
          <input
            type='password'
            id='password'
            name='password'
            className='block rounded-t-lg pb-2.5 pt-5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer pr-6'
            placeholder=' '
            onChange={handleChange}
            value={formData.password}
          />
          <label
            htmlFor='password'
            className='absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Password
          </label>
          <IoLockClosedSharp className='absolute top-1/2 right-1 text-white -translate-y-1/2 text-base pointer-events-none' />
          {errors.password && <p className='text-xs text-red-500 mt-1'>{errors.password}</p>}
        </div>
        <div className='relative mt-5'>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            className='block rounded-t-lg pb-2.5 pt-5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer pr-6'
            placeholder=' '
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          <label
            htmlFor='confirmPassword'
            className='absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Confirm Password
          </label>
          <IoLockClosedSharp className='absolute top-1/2 right-1 text-white -translate-y-1/2 text-base pointer-events-none' />
          {errors.confirmPassword && <p className='text-xs text-red-500 mt-1'>{errors.confirmPassword}</p>}
        </div>

        <button className='block bg-white text-black w-full rounded py-2 font-medium mt-5' type='submit'>
          Register
        </button>
        <p className='text-center text-white text-sm py-5 font-medium'>
          You have an account? <Link to='/'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
