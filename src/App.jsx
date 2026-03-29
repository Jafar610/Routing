import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import User from './Pages/User'
import ProtectedRoute from './Components/ProtectedRoute'
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/user/:id' element={<ProtectedRoute><User /></ProtectedRoute>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
