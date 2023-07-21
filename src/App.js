import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Technology from './pages/Technology'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'


function App() {


  return (
   <Router>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/destination' element={<Destination/>}/>
    <Route path='/crew'  element={<Crew/>}/> 
    <Route path='/technology' element={<Technology/>}/>  

   </Routes>

   </Router>
  )
}

export default App
