import { useCallback, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoFacebookCircle, BiLogoGoogle } from 'react-icons/bi';
import { IoLockClosedSharp, IoMailSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Add success message state

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formData.email === 'kietnt@gmail.com' && formData.password === 'Password123@@') {
        setError('');
        setSuccessMessage('Login successful'); // Set success message here
      } else {
        setError('Email or password is invalid');
      }
    },
    [formData]
  );
  const handleLogin = (response: any) => {
    setSuccessMessage('Logged in successfully'); // Set success message here
    console.log(response);
  };


  const handleLoginFailure = (error: any) => {
    console.log(error);
  };

  return (
    <div className='w-screen h-screen bg-login bg-center bg-cover flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='border-2 border-white rounded-lg py-3 px-10 relative backdrop-blur-sm min-w-[350px]'
      >
        <AiOutlineClose className='absolute top-0 right-0 bg-white w-8 h-8 rounded-bl-lg rounded-tr-sm p-1' />
        <p className='text-4xl font-bold text-gray-400 mb-8'>Login</p>
        {successMessage && <p className='text-green-500 mb-2'>{successMessage}</p>} {/* Display success message */}
        <div className='relative mt-5'>
          <input
            type='text'
            id='email'
            name='email'
            className='block rounded-t-lg pb-2.5 pt-5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer pr-6'
            placeholder=' '
            onChange={handleChange}
            value={formData.email} />
          <label
            htmlFor='email'
            className='absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Email
          </label>
          <IoMailSharp className='absolute top-1/2 right-1 text-white -translate-y-1/2 text-base pointer-events-none' />
          {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}
        </div>
        <div className='relative mt-5'>
          <input
            type='password'
            id='password'
            name='password'
            className='block rounded-t-lg pb-2.5 pt-5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer pr-6'
            placeholder=' '
            onChange={handleChange}
            value={formData.password} />
          <label
            htmlFor='password'
            className='absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Password
          </label>
          <IoLockClosedSharp className='absolute top-1/2 right-1 text-white -translate-y-1/2 text-base pointer-events-none' />
          {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}
        </div>

        <div className='flex justify-between items-center my-3'>
          <div className='flex justify-center items-center gap-2'>
            <input type='checkbox' id='remember' name='remember' />
            <label className='text-white text-sm font-medium' htmlFor='remember'>
              Remember me
            </label>
          </div>
          <a href='#' className='text-white text-sm font-medium'>
            Forgot Password?
          </a>
        </div>
        <button className='block bg-white text-black w-full rounded py-2 font-medium' type='submit'>
          Login
        </button>
        <p className='text-center text-white text-sm py-5 font-medium'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        {/* login by google */}
       
  <LoginSocialGoogle
  client_id='602153330253-agc9shi1m06u65aagl32cbeh8pkh1lqf.apps.googleusercontent.com'
  onResolve={handleLogin}
  onReject={handleLoginFailure}>
  <button
  className="block bg-transparent text-white border-2 border-white w-full rounded-3xl py-2 font-medium mb-3"
              type="button">
              <div className="flex justify-center items-center gap-1">
                <BiLogoGoogle />
                Login with Google
              </div>
  </button>
  
  </LoginSocialGoogle>
 
        {/* login by facebook */}
        <LoginSocialFacebook
          appId='210431665284066'
          onResolve={handleLogin}
          onReject={handleLoginFailure}>
          <button
            className='block bg-transparent text-white border-2 border-white w-full rounded-3xl py-2 font-medium mb-2'
            type='button'
          >
            <div className=' flex justify-center items-center gap-1'>
              <BiLogoFacebookCircle />
              Login with Facebook
            </div>
          </button>
        </LoginSocialFacebook>
      </form>
    </div>
  );
}

export default Login
