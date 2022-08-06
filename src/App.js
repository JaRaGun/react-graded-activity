import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Exercise1 from './pages/Exercise1'
import Navbar from './components/Navbar';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3'
import Exercise4 from './pages/Exercise4'
import Exercise5 from './pages/Exercise5'
import Exercise6 from './pages/Exercise6'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Exercise1/>}/>
        <Route path='exercise2' element={<Exercise2/>}/>
        <Route path='exercise3' element={<Exercise3/>}/>
        <Route path='exercise4' element={<Exercise4/>}/>
        <Route path='exercise5' element={<Exercise5/>}/>
        <Route path='exercise6' element={<Exercise6/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
