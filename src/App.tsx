import Login from '@/pages/Login'
import './App.css'
import { Header } from './components'
import { Routes, Route } from 'react-router-dom'
import Register from '@/pages/Register'

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
