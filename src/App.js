import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Signin from './pages/signin/Signin'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
