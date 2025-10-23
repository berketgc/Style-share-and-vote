
import './App.css'
import Card from './components/Card/Card'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Post from './components/post/Post'
import Register from './components/Register/Register'
import Trend from './components/trend/Trend'
import User from './components/user/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <div className='bg-[#A27B5C]'>
       <Router>
        <Navbar /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Card />
                <User />
                <Trend />
              </>
            }
          />
          <Route path="/profile" element={<Post />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
     </div>
    </>
  )
}

export default App
