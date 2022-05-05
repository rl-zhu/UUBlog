// import logo from './logo.svg';
import Welcome from './pages/welcome';
import Reg from './pages/reg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return(
    <Router>
      

      <Routes>
        <Route path='/' element={<Welcome />}></Route>
          <Route path='/register' element={<Reg />}></Route>
      </Routes>
    </Router>
  )

}

export default App;
