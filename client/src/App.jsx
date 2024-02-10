import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React from 'react'
import SignOut from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
 return <BrowserRouter>
 <Header/>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignOut/>} />
    <Route path='/about' element={<About/>} />
    <Route  element={<PrivateRoute/>} >
      <Route path='/profile' element={<Profile/>} />
    </Route>
  </Routes>
 </BrowserRouter>
   
}

export default App