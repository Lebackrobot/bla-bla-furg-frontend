import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Signin from './pages/signin/Signin'
import Signup from './pages/signin/signup/Signup';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import React from 'react';

const App = () => {

  React.useEffect(() => {
    let token = localStorage.getItem('token')

    if (!token && !['/signin', '/signup'].includes(window.location.pathname)) {
      window.location.href = '/signin'
    }
  }, [])


  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/home'   element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
