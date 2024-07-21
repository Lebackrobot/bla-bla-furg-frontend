import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Signin from './pages/signin/Signin'
import Signup from './pages/signin/signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
